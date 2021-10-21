import aircv
import subprocess
# def show(img):
#     cv2.imshow('main_p', img)
#     cv2.waitKey(0)
#     cv2.destroyAllWindows()

def main():
    im_main = aircv.imread("img/main_p.png")
    im_sch = aircv.imread("img/sch_p_1.png")
    print(aircv.find(im_main, im_sch))

if __name__ == '__main__':
    main()