import glob
import os

images = glob.glob("*.jpg")

# rename JPG to jpg
for i, image in enumerate(images):
    new_name = image.lower()
    os.rename(image, f"new_{i}.jpg")