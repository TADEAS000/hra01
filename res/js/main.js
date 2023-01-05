const tutorialButton = document.getElementById ("tutorialbutton")
const tutorialMenu = document.getElementById ("tutorialmenu")
const money = document.getElementById ("money")
const pharmacy = document.getElementById ("pharmacy")
const varna = document.getElementById ("varna")
const buyMenu = document.getElementById ("buymenu")
const storageMenu = document.getElementById ("storagemenu")
const hydroAcid = document.getElementById ("drug1")
const pseudo = document.getElementById ("drug2")
const efedrin = document.getElementById ("drug3")
const lith = document.getElementById ("drug4")
const hydroAcid3 = document.getElementById ("drug5")
const pseudo3 = document.getElementById ("drug6")
const efedrin3 = document.getElementById ("drug7")
const lith3 = document.getElementById ("drug8")
const cook = document.getElementById ("cook")
const storageSell = document.getElementById ("storagesell")
const sell = document.getElementById ("sell")
const storageDrug = document.getElementById ("storagedrug")
const phone = document.getElementById ("phone")
const phone2 = document.getElementById ("phone2") 
const close = document.getElementById ("close")
const phoneText = document.getElementById ("phonetext")
const upgrade1 = document.getElementById ("upgrade1")
const upgrade2 = document.getElementById ("upgrade2")
const upgrade3 = document.getElementById ("upgrade3")
const drugUpgrade1 = document.getElementById ("drugupgrade1")
const drugUpgrade2 = document.getElementById ("drugupgrade2")
const drugUpgrade3 = document.getElementById ("drugupgrade3")
const out = document.getElementById ("out")
const next = document.getElementById ("next")
const dry = document.getElementById ("dry")
const garden = document.getElementById ("garden")
const gardenPrice = document.getElementById ("gardenprice")
const seedStorage = document.getElementById ("drug9")
const lameWeed = document.getElementById ("drug10")
const buySeed = document.getElementById ("drug11")
const progress1 = document.getElementById ("progress1")
const progress2 = document.getElementById ("progress2")
const progress3 = document.getElementById ("progress3")
const progress4 = document.getElementById ("progress4")
const progress5 = document.getElementById ("progress5")
const progress6 = document.getElementById ("progress6")
const progress7 = document.getElementById ("progress7")
const plant1 = document.getElementById ("plant1")
const plant2 = document.getElementById ("plant2")
const plant3 = document.getElementById ("plant3")
const plant4 = document.getElementById ("plant4")
const plant5 = document.getElementById ("plant5")
const plant6 = document.getElementById ("plant6")
const plant7 = document.getElementById ("plant7")
const harvest1 = document.getElementById ("harvest1")
const harvest2 = document.getElementById ("harvest2")
const harvest3 = document.getElementById ("harvest3")
const harvest4 = document.getElementById ("harvest4")
const harvest5 = document.getElementById ("harvest5")
const harvest6 = document.getElementById ("harvest6")
const harvest7 = document.getElementById ("harvest7")
const audio1 = document.getElementById ("audio1")
const audio2 = document.getElementById ("audio2")
const audio3 = document.getElementById ("audio3")
const play = document.getElementById ("play")
const mute = document.getElementById ("mute")
const meth10 = document.getElementById ("storagemeth")
const weed10 = document.getElementById ("storageweed")

let moneyCounter = 50
let hydroAcid2 = 25
let pseudo2 = 25
let efedrin2 = 25
let lith2 = 25
let storageHydroAcid = 0
let storagePseudo = 0
let storageEfedrin = 0
let storageLith = 0
let cookProcess = 1
let meth = 150
let storageMeth = 0
let weed = 10
let harvestProcess = 10
let storageWeed = 0
let driedWeed = 0
let sellProcess = 1
let upgradePrice1 = 500
let upgradePrice2 = 1000
let upgradePrice3 = 2500
let upgradeResult1 = 50
let upgradeResult2 = 100
let upgradeResult3 = 200
let seed = 0
let seedPrice = 10
let progressThing1 = 0
let progressThing2 = 0
let progressThing3 = 0
let progressThing4 = 0
let progressThing5 = 0
let progressThing6 = 0
let progressThing7 = 0

play.onclick = () => {
  audio1.play ();
  play.style.display = "none"
  mute.style.display = "block"
}
mute.onclick = () => {
  audio1.pause ();
  play.style.display = "block"
  mute.style.display = "none"
}
tutorialButton.onclick = () => {
    document.body.style.backgroundImage = "url(./res/img/gamebackground.png)";
    tutorialMenu.style.display = "none";
    money.style.display = "block"
    storageMenu.style.display = "block"
    cook.style.display = "block"
    phone2.style.display = "block"
    out.style.display = "block"
    storageSell.style.display = "block"
    next.style.display = "block"
    dry.style.display = "block"
    play.style.display = "block"
    plant1.style.display = "none"
    plant2.style.display = "none"
    plant3.style.display = "none"
    plant4.style.display = "none"
    plant5.style.display = "none"
    plant6.style.display = "none"
    plant7.style.display = "none"
    harvest1.style.display = "none"
    harvest2.style.display = "none"
    harvest3.style.display = "none"
    harvest4.style.display = "none"
    harvest5.style.display = "none"
    harvest6.style.display = "none"
    harvest7.style.display = "none"
    progress1.style.display = "none"
    progress2.style.display = "none"
    progress3.style.display = "none"
    progress4.style.display = "none"
    progress5.style.display = "none"
    progress6.style.display = "none"
    progress7.style.display = "none"
}
out.onclick = () => {
    document.body.style.backgroundImage = "url(./res/img/town.png)";
    phone2.style.display = "block"
    cook.style.display = "none"
    storageMenu.style.display = "none"
    pharmacy.style.display = "block"
    sell.style.display = "block"
    out.style.display = "none"
    varna.style.display = "block"
    storageSell.style.display = "block"
    buyMenu.style.display = "none"
    next.style.display = "none"
    dry.style.display = "none"
    garden.style.display = "block"
    gardenPrice.style.display = "none"
    audio2.pause ();
    audio3.pause ();
    play.style.display = "block"
    mute.style.display = "none"
}
next.onclick = () => {
  document.body.style.backgroundImage = "url(./res/img/weedroom.png)";
  storageSell.style.display = "none"
  cook.style.display = "none"
  next.style.display = "none"
  out.style.display = "none"
  varna.style.display = "block"
  dry.style.display = "none"
  if (progressThing1 == 0) {
      plant1.style.display = "block"    
  }
  if (progressThing2 == 0) {
      plant2.style.display = "block"
  }
  if (progressThing3 == 0) {
      plant3.style.display = "block"
    }
  if (progressThing4 == 0) {
      plant4.style.display = "block"
  }
  if (progressThing5 == 0) {
      plant5.style.display = "block"
    }
  if (progressThing6 == 0) {
      plant6.style.display = "block"
    }
  if (progressThing7 == 0) {
      plant7.style.display = "block"
    }
  if (progressThing1 > 0 && progressThing1 < 30) {
      progress1.style.display = "block"
    }
  if (progressThing2 > 0 && progressThing2 < 30) {
      progress2.style.display = "block"
    }
  if (progressThing3 > 0 && progressThing3 < 30) {
      progress3.style.display = "block"
    }
  if (progressThing4 > 0 && progressThing4 < 30) {
      progress4.style.display = "block"
    }
  if (progressThing5 > 0 && progressThing5 < 30) {
      progress5.style.display = "block"
    }
  if (progressThing6 > 0 && progressThing6 < 30) {
      progress6.style.display = "block"
    }
  if (progressThing7 > 0 && progressThing7 < 30) {
      progress7.style.display = "block"
    }
  if (progressThing1 == 30) {
      harvest1.style.display = "block"
    }
  if (progressThing2 == 30) {
      harvest2.style.display = "block"
    }
  if (progressThing3 == 30) {
      harvest3.style.display = "block"
    }
  if (progressThing4 == 30) {
      harvest4.style.display = "block"
    }
  if (progressThing5 == 30) {
      harvest5.style.display = "block"
    }
  if (progressThing6 == 30) {
      harvest6.style.display = "block"
    }
  if (progressThing7 == 30) {
      harvest7.style.display = "block"
    }
  }    
garden.onclick = () => {
  document.body.style.backgroundImage = "url(./res/img/gardencenter.png)";
  cook.style.display = "none"
  storageSell.style.display = "none"
  sell.style.display = "none"
  varna.style.display = "none"
  pharmacy.style.display = "none"
  out.style.display = "block"
  garden.style.display = "none"
  gardenPrice.style.display = "block"
  audio3.play ();
  audio1.pause ();
    play.style.display = "none"
    mute.style.display = "none"
}
pharmacy.onclick = () => {
    document.body.style.backgroundImage = "url(./res/img/pharmacy.png)";
    pharmacy.style.display = "none"
    varna.style.display = "none"
    buyMenu.style.display = "block"
    cook.style.display = "none"
    storageMenu.style.display = "none"
    cook.style.display = "none"
    storageSell.style.display = "none"
    sell.style.display = "none"
    phone.style.display = "none"
    phoneText.style.display = "none"
    close.style.display = "none"
    out.style.display = "block"
    garden.style.display = "none"
    audio2.play ();
    audio1.pause ();
    play.style.display = "none"
    mute.style.display = "none"
}
varna.onclick = () => { 
    document.body.style.backgroundImage = "url(./res/img/gamebackground.png)";
    varna.style.display = "none"
    pharmacy.style.display = "none"
    buyMenu.style.display = "none"
    cook.style.display = "block"
    storageMenu.style.display = "block"
    cook.style.display = "block"
    storageSell.style.display = "block"
    sell.style.display = "none"
    phone2.style.display = "block"
    phone.style.display = "none"
    phoneText.style.display = "none"
    close.style.display = "none"
    out.style.display = "block"
    next.style.display = "block"
    dry.style.display = "block"
    garden.style.display = "none"
    plant1.style.display = "none"
    plant2.style.display = "none"
    plant3.style.display = "none"
    plant4.style.display = "none"
    plant5.style.display = "none"
    plant6.style.display = "none"
    plant7.style.display = "none"
    harvest1.style.display = "none"
    harvest2.style.display = "none"
    harvest3.style.display = "none"
    harvest4.style.display = "none"
    harvest5.style.display = "none"
    harvest6.style.display = "none"
    harvest7.style.display = "none"
    progress1.style.display = "none"
    progress2.style.display = "none"
    progress3.style.display = "none"
    progress4.style.display = "none"
    progress5.style.display = "none"
    progress6.style.display = "none"
    progress7.style.display = "none"
  }
phone2.onclick = () => {
    phone.style.display = "block"
    phone2.style.display = "none"
    close.style.display = "block"
    phoneText.style.display = "block"
}
close.onclick = () => {
  phone.style.display = "none"
  phone2.style.display = "block"
  close.style.display = "none"
  phoneText.style.display = "none"
}
hydroAcid.onclick = () => { 
    if (moneyCounter >= hydroAcid2) {
      moneyCounter -= hydroAcid2;
      storageHydroAcid++;
      money.innerHTML = `Money : $${moneyCounter}`;
      hydroAcid3.innerHTML = `Hydrochloric acid - ${storageHydroAcid}`
    }
  };
pseudo.onclick = () => { 
    if (moneyCounter >= pseudo2) {
      moneyCounter -= pseudo2;
      storagePseudo++;
      money.innerHTML = `Money : $${moneyCounter}`;
      pseudo3.innerHTML = `Pseudoephedrin - ${storagePseudo}`
    }
  };
efedrin.onclick = () => { 
    if (moneyCounter >= efedrin2) {
      moneyCounter -= efedrin2;
      storageEfedrin++;
      money.innerHTML = `Money: $${moneyCounter}`;
      efedrin3.innerHTML = `Ephedrin - ${storageEfedrin}`
    }
  };
lith.onclick = () => { 
    if (moneyCounter >= lith2) {
      moneyCounter -= lith2;
      storageLith++;
      money.innerHTML = `Money: $${moneyCounter}`;
      lith3.innerHTML = `Lithium - ${storageLith}`;
    }
  };
cook.onclick = () => {
    if (storageHydroAcid >= cookProcess && storageLith >= cookProcess && storagePseudo >= cookProcess && storageEfedrin >= cookProcess) {
      storageEfedrin -= cookProcess;
      storageHydroAcid -= cookProcess;
      storageLith -= cookProcess;
      storagePseudo -= cookProcess;
      storageMeth++;
      meth10.innerHTML = `Methamphetamine - ${storageMeth}`;
      lith3.innerHTML = `Lithium - ${storageLith}`;
      efedrin3.innerHTML = `Ephedrin - ${storageEfedrin}`;
      pseudo3.innerHTML = `Pseudoephedrin - ${storagePseudo}`;
      hydroAcid3.innerHTML = `Hydrochloric acid - ${storageHydroAcid}`;
    }
  }
sell.onclick = () => {
    if (storageMeth >= sellProcess) {
      storageMeth -= sellProcess;
      moneyCounter += meth;
      money.innerHTML = `Money: $${moneyCounter}`;
      meth10.innerHTML = `Methamphetamine - ${storageMeth}`;
    }
    else if (driedWeed >= sellProcess) {
      driedWeed -= sellProcess;
      moneyCounter += weed;
      money.innerHTML = `Money: $${moneyCounter}`;
      meth10.innerHTML = `Dried weed - ${driedWeed}`;
    }
  }
upgrade1.onclick = () => {
    if (moneyCounter >= upgradePrice1) {
      moneyCounter -= upgradePrice1;
      meth += upgradeResult1;
      drugUpgrade1.style.display = "none"
      upgrade1.style.display = "none"
      money.innerHTML = `Money: $${moneyCounter}`;
    }
  }
upgrade2.onclick = () => {
    if (moneyCounter >= upgradePrice2) {
      moneyCounter -= upgradePrice2;
      meth += upgradeResult2;
      drugUpgrade2.style.display = "none"
      upgrade2.style.display = "none"
      money.innerHTML = `Money : $${moneyCounter}`;
    }
  }
upgrade3.onclick = () => {
    if (moneyCounter >= upgradePrice3) {
      moneyCounter -= upgradePrice3;
      meth += upgradeResult3;
      drugUpgrade3.style.display = "none"
      upgrade3.style.display = "none"
      money.innerHTML = `Money : $${moneyCounter}`;
    }
  }
buySeed.onclick = () => { 
    if (moneyCounter >= seedPrice) {
      moneyCounter -= seedPrice;
      seed++;
      money.innerHTML = `Money : $${moneyCounter}`;
      seedStorage.innerHTML = `Weed seeds - ${seed}`
    }
  }
  plant1.onclick = () => {
    if (seed >= 1) {
      seed -= cookProcess;
    seedStorage.innerHTML = `Weed seeds - ${seed}`
    plant1.style.display = "none"
    progress1.style.display = "block"
    setInterval(() => {
      if (progressThing1 < 30) {
        progressThing1++;
        progress1.innerHTML = `${progressThing1}/30`
      }
    }, 1000)
   }
  }
  plant2.onclick = () => {
    if (seed >= 1) {
      seed -= cookProcess;
    seedStorage.innerHTML = `Weed seeds - ${seed}`
    plant2.style.display = "none"
    progress2.style.display = "block"
    setInterval(() => {
      if (progressThing2 < 30) {
        progressThing2++;
        progress2.innerHTML = `${progressThing2}/30`
      }
    }, 1000)
   }
  }
  plant3.onclick = () => {
    if (seed >= 1) {
      seed -= cookProcess;
    seedStorage.innerHTML = `Weed seeds - ${seed}`
    plant3.style.display = "none"
    progress3.style.display = "block"
    setInterval(() => {
      if (progressThing3 < 30) {
        progressThing3++;
        progress3.innerHTML = `${progressThing3}/30`
      }
    }, 1000)
   }
  }
  plant4.onclick = () => {
    if (seed >= 1) {
      seed -= cookProcess;
    seedStorage.innerHTML = `Weed seeds - ${seed}`
    plant4.style.display = "none"
    progress4.style.display = "block"
    setInterval(() => {
      if (progressThing4 < 30) {
        progressThing4++;
        progress4.innerHTML = `${progressThing4}/30`
      }
    }, 1000)
   }
  }
  plant5.onclick = () => {
    if (seed >= 1) {
      seed -= cookProcess;
    seedStorage.innerHTML = `Weed seeds - ${seed}`
    plant5.style.display = "none"
    progress5.style.display = "block"
    setInterval(() => {
      if (progressThing5 < 30) {
        progressThing5++;
        progress5.innerHTML = `${progressThing5}/30`
      }
    }, 1000)
   }
  }
  plant6.onclick = () => {
    if (seed >= 1) {
      seed -= cookProcess;
    seedStorage.innerHTML = `Weed seeds - ${seed}`
    plant6.style.display = "none"
    progress6.style.display = "block"
    setInterval(() => {
      if (progressThing6 < 30) {
        progressThing6++;
        progress6.innerHTML = `${progressThing6}/30`
      }
    }, 1000)
   }
  }
  plant7.onclick = () => {
    if (seed >= 1) {
      seed -= cookProcess;
    seedStorage.innerHTML = `Weed seeds - ${seed}`
    plant7.style.display = "none"
    progress7.style.display = "block"
    setInterval(() => {
      if (progressThing7 < 30) {
        progressThing7++;
        progress7.innerHTML = `${progressThing7}/30`
      }
    }, 1000)
   }
  }
if (document.body.style.backgroundImage = "url(./res/img/weedroom.png)" && progressThing1 == 30) {
    harvest1.style.display = "block"
}
if (document.body.style.backgroundImage = "url(./res/img/weedroom.png)" && progressThing2 == 30) {
  harvest2.style.display = "block"
}
if (document.body.style.backgroundImage = "url(./res/img/weedroom.png)" && progressThing3 == 30) {
harvest3.style.display = "block"
}
if (document.body.style.backgroundImage = "url(./res/img/weedroom.png)" && progressThing4 == 30) {
harvest4.style.display = "block"
}
if (document.body.style.backgroundImage = "url(./res/img/weedroom.png)" && progressThing5 == 30) {
harvest5.style.display = "block"
}
if (document.body.style.backgroundImage = "url(./res/img/weedroom.png)" && progressThing6 == 30) {
harvest6.style.display = "block"
}
if (document.body.style.backgroundImage = "url(./res/img/weedroom.png)" && progressThing7 == 30) {
harvest7.style.display = "block"
}  
if (document.body.style.backgroundImage != "url(./res/img/weedroom.png)" && progressThing1 == 30) {
      harvest1.style.display = "none"
  }
if (document.body.style.backgroundImage != "url(./res/img/weedroom.png)" && progressThing2 == 30) {
    harvest2.style.display = "none"
}
if (document.body.style.backgroundImage != "url(./res/img/weedroom.png)" && progressThing3 == 30) {
  harvest3.style.display = "none"
}
if (document.body.style.backgroundImage != "url(./res/img/weedroom.png)" && progressThing4 == 30) {
  harvest4.style.display = "none"
}
if (document.body.style.backgroundImage != "url(./res/img/weedroom.png)" && progressThing5 == 30) {
  harvest5.style.display = "none"
}
if (document.body.style.backgroundImage != "url(./res/img/weedroom.png)" && progressThing6 == 30) {
  harvest6.style.display = "none"
}
if (document.body.style.backgroundImage != "url(./res/img/weedroom.png)" && progressThing7 == 30) {
  harvest7.style.display = "none"
}
harvest1.onclick = () => {
  storageWeed += harvestProcess;
  harvest1.style.display = "none"
  plant1.style.display = "block"
  lameWeed.innerHTML = `Unprepared weed - ${storageWeed}`
}
harvest2.onclick = () => {
  storageWeed += harvestProcess;
  harvest2.style.display = "none"
  plant2.style.display = "block"
  lameWeed.innerHTML = `Unprepared weed - ${storageWeed}`
}
harvest3.onclick = () => {
  storageWeed += harvestProcess;
  harvest3.style.display = "none"
  plant3.style.display = "block"
  lameWeed.innerHTML = `Unprepared weed - ${storageWeed}`
}
harvest4.onclick = () => {
  storageWeed += harvestProcess;
  harvest4.style.display = "none"
  plant4.style.display = "block"
  lameWeed.innerHTML = `Unprepared weed - ${storageWeed}`
}
harvest5.onclick = () => {
  storageWeed += harvestProcess;
  harvest5.style.display = "none"
  plant5.style.display = "block"
  lameWeed.innerHTML = `Unprepared weed - ${storageWeed}`
}
harvest6.onclick = () => {
  storageWeed += harvestProcess;
  harvest6.style.display = "none"
  plant6.style.display = "block"
  lameWeed.innerHTML = `Unprepared weed - ${storageWeed}`
}
harvest7.onclick = () => {
  storageWeed += harvestProcess;
  harvest7.style.display = "none"
  plant7.style.display = "block"
  lameWeed.innerHTML = `Unprepared weed - ${storageWeed}`
}
dry.onclick = () => {
  if (storageWeed >= cookProcess) {
    storageWeed -= cookProcess
    storageWeed--;
    driedWeed++;
    weed10.innerHTML = `Dried weed - ${driedWeed}`;
  }
}