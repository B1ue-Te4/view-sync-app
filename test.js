const obj = {
    name: "Yamada",
    show: () => {
      console.log(this.name);
    }
  };

const hoge = obj.show;
hoge();
obj.show();