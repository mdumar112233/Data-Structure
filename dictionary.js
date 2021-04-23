class Dictionary {
    constructor(){
        this.dictionary = {};
    }
    add(key, value){
        this.dictionary[key] = value;
    }
    get(key){
        return this.dictionary[key];
    }
}

const phoneBook = new Dictionary();

phoneBook.add('rofik', '934983883');
phoneBook.add('arif', '343983883');
phoneBook.add('rafi', '234235983883');
console.log(phoneBook.dictionary);
const ggg = phoneBook.get('arif');
console.log(phoneBook.ggg);


