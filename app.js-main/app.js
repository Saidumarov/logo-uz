// 1 - masala

// Sizga n natural son beriladi. Unga ko'ra quyidagicha obyekt hosil qilishingiz kerak va uni console`ga chiqarishga kerak:

// {
//     prop1: "Value #1",
//     prop2: "Value #2",
//     prop3: "Value #3",
//     ...
//     prop{n}: "Value #{n}"
// }

let n = 10;

let res = {};
for (let i = 1; i <= n; i++) {
  let a = "prop" + i;
  let b = "Value #" + i;
  res[a] = b;
}

console.log(res);


// 2- masala

// Sizga n natural son beriladi. Uni tub son ekanlikka tekshiruvchi dastur tuzishingiz kerak.

// Agar u tub son bo'lsa, console`ga "YES", aks holda "NO" chiqarish kerak.

let nom = 29;

let ress = true;
for (let i = 2; i <= Math.sqrt(nom); i++) {
  if (nom % i == 0) {
    ress = false;
    break;
  }
}

if (ress && nom > 1) {
  console.log("YES");
} else {
  console.log("NO");
}




//  3-Massala
// Sizga nomanfiy n butun son beriladi.
//  1dan n gacha bo'lgan murakkab sonlarni console`ga chiqaruvchi dastur tuzing


let number = 9;

function isComposite(num) {
  if (num < 4) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return true;
    }
  }
  return false;
}

for (let i = 2; i <= number; i++) {
  if (isComposite(i)) {
    let sum = 0;
    for (let j = 1; j < i; j++) {
      if (i % j === 0) {
        sum += j;
      }
    }
    if (sum > 1 && sum < i) {
      console.log(i);
    }
  }
}



// 4-Masala

// Sizga n natural son berilgan. 1 dan n gacha bo'lgan (n ham kiradi) 
// barcha tub sonlarni console`ga bitta qatorda chiqaruvchi dastur tuzing.
// Tub son deb - o'zi va 1(bir)dan boshqa bo'luvchiga ega bo'lmagan songa aytiladi.




let a = 10;
let b = [];

for (let i = 2; i <= a; i++) {
  let c = true;

  for (let j = 2; j < i; j++) {
    if (i % j == 0) {
      c = false;
      break;
    }
  }

  if (c) {
    b.push(i);
  }
}

console.log(b.join('"'));







