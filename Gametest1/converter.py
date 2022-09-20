import os
import imageio
from scipy import misc

def imgtolist(image):
    y = len(image)
    x = len(image[0])
    aray = []
    for i in range(y):
        line = []
        for i2 in range(x):
            a = hex(image[i][i2][0]).split("0x")[1]
            if(len(a) == 1):
                a = "0" + a
            b = hex(image[i][i2][1]).split("0x")[1]
            if(len(b) == 1):
                b = "0" + b
            c = hex(image[i][i2][2]).split("0x")[1]
            if(len(c) == 1):
                c = "0" + c
            if(a+b+c == "aeaeae"):
                line.append("clear")
            else:
                line.append("#" + a + b + c)
        aray.append(line)
    return(aray)

path = 'C:/Users/Elias/Downloads/'
if(input("Do you want to change path from downloads? ") == "y"):
    path = input("path? ")
type = input("background or tile? ").lower()

if(type == "background"):
    image= imageio.imread(os.path.join(path, input("file name"))) 

elif(type == "tile"):
    images = []
    file1 = input("file1 name ")
    images.append(imgtolist(imageio.imread(os.path.join(path, file1 + ".png"))))
    images.append(imgtolist(imageio.imread(os.path.join(path, input("file2 name ") + ".png"))))
    images.append(imgtolist(imageio.imread(os.path.join(path, input("file3 name ") + ".png"))))
    images.append(imgtolist(imageio.imread(os.path.join(path, input("file4 name ") + ".png"))))

    with open(path + file1 + '.json', 'w') as f:
        f.write('{\n"texture": [')
        for i3 in range(4):
            f.write("[")
            for i in range(len(images[0])):
                f.write("[")
                for i2 in range(len(images[0][i])):
                    f.write('"' + images[0][i][i2] + '"')
                    if( i2 != len(images[0][i]) - 1):
                        f.write(", ")
                    else:
                        f.write("\n")
                f.write("]")
                if( i != len(images[0]) - 1):
                    f.write(", ")
                else:
                    f.write("\n")
            f.write("]")
            if( i3 != 3):
                f.write(", ")
            else:
                f.write("\n")
        f.write("]")
        f.write("}")