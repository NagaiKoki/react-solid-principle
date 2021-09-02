export class Animal {
  swim(distance: number) {
    console.log(`${distance}mまで泳いだよ！`);
  }
}

export class Dog extends Animal {
  swim(distance: number) {
    console.log(`${distance}mまで泳いだよ！`);
  }
}

export class Cat extends Animal {
  swim() {
    new Error("猫なので泳げないよ！");
  }
}
