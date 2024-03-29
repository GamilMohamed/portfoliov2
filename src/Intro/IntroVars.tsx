import { Anim } from "../test";

export const classanimation = {
  hidden: { opacity: 0, x: 0, rotateX: 90 },
  visible: { opacity: 1, x: 0, rotateX: 0 },
};

export function getRandomNumber(max: GLfloat | number): GLfloat {
  return Math.random() * max;
}
export const animation: Anim = {
  hidden: { opacity: 0, x: getRandomNumber(30), rotateX: getRandomNumber(90) },
  visible: { opacity: 1, x: 0, rotateX: 0 },
};

export const newanimation = {
  hidden: {
    opacity: 0,
    y: getRandomNumber(60),
    x: getRandomNumber(60),
    rotateX: 92,
  },
  visible: { opacity: 1, y: 0, x: 0, rotateX: 0 },
};

export const normal = {
  hidden: { opacity: 0, rotateX: 90 },
  visible: { opacity: 1, rotateX: 0 },
};
