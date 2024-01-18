1. **forEach:**
    - Array'in her bir elemanı için belirtilen bir fonksiyonu çalıştırır.
    - Döngü yapılarına benzer, ancak forEach daha okunabilir ve kullanışlı bir yapı sunar.

```js
javascriptCopy code
const numbers = [1, 2, 3, 4];

numbers.forEach((number) => {
  console.log(number);
});

```

2. **map:**
    - Bir dizinin her elemanını belirli bir işlemden geçirip yeni bir dizi oluşturur.
    - Oluşturulan yeni dizi, orijinal dizinin her elemanının işlemden geçirilmiş hali içerir.

```js
javascriptCopy code
const numbers = [1, 2, 3, 4];

const doubledNumbers = numbers.map((number) => {
  return number * 2;
});

console.log(doubledNumbers); // [2, 4, 6, 8]

```

3. **filter:**
    - Bir dizi içinde belirli bir koşulu sağlayan elemanları içeren yeni bir dizi oluşturur.

```js
javascriptCopy code
const numbers = [1, 2, 3, 4];

const evenNumbers = numbers.filter((number) => {
  return number % 2 === 0;
});

console.log(evenNumbers); // [2, 4]

```

4. **find:**
    - Belirli bir koşulu sağlayan ilk elemanı bulur ve geri döndürür.

```js
javascriptCopy code
const numbers = [1, 2, 3, 4];

const foundNumber = numbers.find((number) => {
  return number === 3;
});

console.log(foundNumber); // 3

```

5. **reduce:**
    - Bir diziyi tek bir değere indirger. Örneğin, toplam, çarpım gibi işlemler için kullanılabilir.

```js
javascriptCopy code
const numbers = [1, 2, 3, 4];

const sum = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);

console.log(sum); // 10

```

6. **some:**
    - Dizi içinde belirli bir koşulu sağlayan en az bir eleman varsa true, yoksa false döndürür.

```js
javascriptCopy code
const numbers = [1, 2, 3, 4];

const hasEvenNumber = numbers.some((number) => {
  return number % 2 === 0;
});

console.log(hasEvenNumber); // true

```

7. **every:**
    - Dizi içindeki tüm elemanlar belirli bir koşulu sağlıyorsa true, en az biri sağlamıyorsa false döndürür.

```js
javascriptCopy code
const numbers = [2, 4, 6, 8];

const allEvenNumbers = numbers.every((number) => {
  return number % 2 === 0;
});

console.log(allEvenNumbers); // true

```

Bu fonksiyonlar, JavaScript'te diziler üzerinde işlem yaparken çok yaygın olarak kullanılır ve kodunuzu daha okunabilir ve etkili hale getirmenize yardımcı olabilir.


JavaScript'te `this` keyword'ü, mevcut bağlamın (context) referansını temsil eden bir özeldir. `this`, genellikle fonksiyonlar içinde kullanılır ve bu fonksiyonun nasıl çağrıldığına bağlı olarak farklı değerlere sahip olabilir. `this` değeri, bir fonksiyonun içinde kullanıldığı bağlam tarafından belirlenir.

İşte `this` keyword'ünün bazı kullanım senaryoları:

1. **Global Context:**
    
    ```jsx
    console.log(this); // global object (window in browsers)
    
    ```
    
    Global bağlamda, `this` genellikle `window` objesini temsil eder. Ancak, bu tarayıcı dışındaki bir ortamda veya "strict mode"da ise `this` global objeyi temsil etmez.
    
2. **Function Context:**
    
    ```jsx
    function exampleFunction() {
      console.log(this);
    }
    
    exampleFunction(); // global object (window in browsers)
    
    ```
    
    Bir fonksiyon doğrudan çağrıldığında, `this` genellikle global objeyi temsil eder.
    
3. **Object Method:**
    
    ```jsx
    const myObject = {
      property: 'value',
      myMethod: function() {
        console.log(this.property);
      }
    };
    
    myObject.myMethod(); // value
    
    ```
    
    Bir nesne metodu içinde, `this` o metodu çağıran nesneyi temsil eder.
    
4. **Event Handlers:**
    
    ```jsx
    const myButton = document.getElementById('myButton');
    
    myButton.addEventListener('click', function() {
      console.log(this); // myButton element
    });
    
    ```
    
    Bir olay dinleyicisi içinde, `this` genellikle olayı tetikleyen HTML öğesini temsil eder.
    
5. **Arrow Functions:**
    
    Arrow functions, kendi `this` bağlamını oluşturur ve genellikle tanımlandıkları bağlamı korur.
    
    ```jsx
    const myObject = {
      myMethod: () => {
        console.log(this); // global object or undefined (strict mode)
      }
    };
    
    myObject.myMethod();
    
    ```
    
    Arrow fonksiyonları, kendi `this` bağlamını oluşturdukları için normal fonksiyonlardan farklı davranır.
    

Bu örnekler, `this`'in nasıl davrandığını genel hatlarıyla gösterir. Ancak, `this` kavramı, karmaşıklığı ve anlaşılması zorlukları nedeniyle dikkatlice ele alınmalıdır. Fonksiyonun nasıl çağrıldığı, bağlam ve bağlam dışındaki diğer faktörler, `this`'in değerini etkiler.