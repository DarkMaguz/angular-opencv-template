#!/usr/bin/env python3

# Script to download libs, models and images from OpenCV.

import os
import subprocess

# List of directories to create.
DIRS = [
    "src/assets",
    "public/models"
]

# List of haarcascades models to download.
HAAR_MODELS = [
    "haarcascade_eye.xml",
    "haarcascade_eye_tree_eyeglasses.xml",
    "haarcascade_frontalcatface.xml",
    "haarcascade_frontalcatface_extended.xml",
    "haarcascade_frontalface_alt.xml",
    "haarcascade_frontalface_alt2.xml",
    "haarcascade_frontalface_alt_tree.xml",
    "haarcascade_frontalface_default.xml",
    "haarcascade_fullbody.xml",
    "haarcascade_profileface.xml"
]

# Haarcascades models URL.
HAAR_MODELS_URL = "https://github.com/opencv/opencv/raw/refs/tags/4.10.0/data/haarcascades/"

# List of files to download and their destination.
FILES = [
    ("https://docs.opencv.org/4.10.0/opencv.js", "src/assets/opencv.js"),
    ("https://docs.opencv.org/4.10.0/utils.js", "src/assets/utils.js"),
    ("https://github.com/opencv/opencv/blob/4.x/samples/data/lena.jpg?raw=true",
        "public/lena.jpg"),
    ("https://balling.dk/images/TheBigBangTheory.jpg", "public/TheBigBangTheory.jpg")
]

# Append harrascade models to the list.
for model in HAAR_MODELS:
    FILES.append((HAAR_MODELS_URL + model, "public/models/" + model))

if __name__ == "__main__":
  # Ensure all directories exists.
  for dir in DIRS:
    if not os.path.isdir(dir):
      os.makedirs(dir)
  
  print("Downloading Files...")
  for file in FILES:
    if not os.path.exists(file[1]):
      print("\t" + file[0] + " -> " + file[1])
      subprocess.run(["wget", "-O", file[1], file[0]])

  if not os.path.exists("node_modules"):
    print("Installing Dependencies...")
    subprocess.run(["npm", "install"])
  
  print("Starting Server...")
  subprocess.run(["npm", "start"])
  
