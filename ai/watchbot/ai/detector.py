import cv2
import numpy as np
import time
import copy
import os
import pytesseract
from watchbot.settings import BASE_DIR
weights_path = os.path.join(BASE_DIR, 'yolov4-tiny-custom-licence_best.weights')
cfg_path = os.path.join(BASE_DIR, 'yolov4-tiny-custom.cfg')

def build_tesseract_options(psm=7):
    # tell Tesseract to only OCR alphanumeric characters
    alphanumeric = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
    options = "-c tessedit_char_whitelist={}".format(alphanumeric)
    # set the PSM mode
    options += " --psm {}".format(psm)
    # return the built options string
    return options

# Load Yolo
net = cv2.dnn.readNet(weights_path, cfg_path)
classes = ["License"]
layer_names = net.getLayerNames()
output_layers = [layer_names[i - 1] for i in net.getUnconnectedOutLayers()]

def processImage(img):
    # Loading image
    height, width, channels = img.shape

    # Detecting objects
    blob = cv2.dnn.blobFromImage(img, 0.00392, (416, 416), (0, 0, 0), True, crop=False)
    net.setInput(blob)
    outs = net.forward(output_layers)


    # Showing informations on the screen
    class_ids = []
    confidences = []
    boxes = []
    for out in outs:
        for detection in out:
            scores = detection[5:]
            class_id = np.argmax(scores)
            confidence = scores[class_id]
            if confidence > 0.5:
                # Object detected
                center_x = int(detection[0] * width)
                center_y = int(detection[1] * height)
                w = int(detection[2] * width)
                h = int(detection[3] * height)

                # Rectangle coordinates
                x = int(center_x - w / 2)
                y = int(center_y - h / 2)

                boxes.append([x, y, w, h])
                confidences.append(float(confidence))
                class_ids.append(class_id)


    indexes = cv2.dnn.NMSBoxes(boxes, confidences, 0.5, 0.4)
    colors = [(0,0,255),(0,255,0)]
    font = cv2.FONT_HERSHEY_PLAIN
    out = []
    for i in range(len(boxes)):
        if i in indexes:
            label = str(classes[class_ids[i]])
            out.append((boxes[i],label))
    licences = []
    for (x,y,w,h),label in out:
        options = build_tesseract_options()
        scale_percent = 250 # percent of original size
        width = int(w * scale_percent / 100)
        height = int(h * scale_percent / 100)
        dim = (width, height)
        imgcopy = cv2.resize(cv2.cvtColor(copy.deepcopy(img[y:y+h,x:x+w]),cv2.COLOR_BGR2GRAY),dim)
        cv2.imwrite("image.png",imgcopy)
        licences.append(pytesseract.image_to_string(imgcopy))
    return {"licences":licences,"detection":out}