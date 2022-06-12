document.addEventListener("keypress",function (e){
  switch (e.code){
      case "KeyA": {
          // let key = document.getElementById("aKey")
          let aAudio = new Audio(src="\A.mp3",);
          // key.style.item();
          aAudio.load();
          aAudio.play();//.then(r => 0);
          break;}
      case "KeyS": {
          let sAudio = new Audio("\s.mp3");
          sAudio.load();
          sAudio.play();
          break;}
      case "KeyD": {
          let dAudio = new Audio("\d.mp3");
          dAudio.load();
          dAudio.play();
          break;}
      case "KeyF": {
          let fAudio = new Audio("\F.mp3");
          fAudio.load();
          fAudio.play();
          break;}
      case "KeyG": {
          let gAudio = new Audio("\g.mp3");
          gAudio.load();
          gAudio.play();
          break;}
      case "KeyH": {
          let hAudio = new Audio("\h.mp3");
          hAudio.load();
          hAudio.play();
          break;}
      case "KeyJ": {
          let jAudio = new Audio("\j.mp3");
          jAudio.load();
          jAudio.play();
          break;}
      case "KeyW": {
          let wAudio = new Audio("\w.mp3");
          wAudio.load();
          wAudio.play();
          break;}
      case "KeyE": {
          let eAudio = new Audio("\e.mp3");
          eAudio.load();
          eAudio.play();
          break;}
      case "KeyT": {
          let tAudio = new Audio("\t.mp3");
          tAudio.load();
          tAudio.play();
          break;}
      case "KeyY": {
          let yAudio = new Audio("\y.mp3");
          yAudio.load();
          yAudio.play();
          break;}
      case "KeyU": {
          let uAudio = new Audio("\U.mp3");
          uAudio.load();
          uAudio.play();
          break;}
      default: {console.log("Invalid Entry "+e.key);}
  }
})
