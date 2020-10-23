/* 
 *    A version  of the TypedMap Class from the book JavaScript The 
 *    Definitive Guide Example 9.6, that uses private fields.
 *    Flanagan mentions private fields but does not give an example so I thought
 *    it would be a good idea to implement them.  
 *    
 *    Here, the user has the option to uncomment the errors statements so that 
 *    errors are thrown when attempts at impropper set key types and value types 
 *    are tried.
 *
 *      @author: Peter Suchsland
 */

class TypedMap extends Map {
    #keyType;
    #valueType;
    constructor(kType, vType, entries) {
        if (entries) {
            super()
            for (let [k, v] of entries) {
                if (typeof k !== kType || typeof v !== vType) {
                    console.log("Input invalid:(1)  " + `Wrong type for entry [${k}, ${v}]`);
                    //throw new TypeError(`Wrong type for entry [${k}, ${v}]`);
                    continue;
                }
            super.set(k, v);
            }
        } else {
            super(entries);
        }
        this.#keyType = kType;
        this.#valueType = vType;
    }
    set(key, value) {
        if (this.#keyType && typeof key !== this.#keyType) {
            console.log("Input Invalid:(2) " + `${key} is not of type ${this.#keyType}`);
            //throw new TypeError(`${key} is not of type ${this.#keyType}`);
            return;
        }
        if (this.#valueType && typeof value !== this.#valueType) {
            console.log("Input Invalid:(3) " + `${value} is not of type ${this.#valueType}`);
            //throw new TypeError(`${value} is not of type ${this.#valueType}`);
            return;
        }
        else {
            return super.set(key, value);
        }
    }
}

//TESTING ...
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
//***** without entries "t1"  
t1 = new TypedMap('number','boolean');
t1.set(0,true);
t1.set(1,true);
t1.set(2,true);
console.log( t1 );
t1.keyType = "string";
console.log( t1 );
t1.set(2, "blueJeans");
console.log( t1 );
t1.set("hello",false);
console.log( t1 );
t1.set(0,"blah");
console.log( t1 );
t1.set(0,false);
t1.set(1,false);
t1.set(2,false);
console.log( t1 );

  
entries = [[111,true],[22,false],[33,true]];
t2 = new TypedMap("number","boolean", entries );
//t3 = new TypedMap("number","boolean", entries );
console.log( t2 );
//console.log( t2.keyType );
//console.log( t3 );
t2.set(0,true);
t2.set(1,false);
t2.set(2,true);
console.log( t2 );
t2.get(0);   

t2.set("blah",false);

console.log( t2 );
t2.set(222, "string");
console.log( t2 );
t2.keyType = "string"
console.log( t2 );
t2.set("stringy",false);
console.log( t2 );

 
badentries = [[2,true],[3,456],["no",false],["bad","bad"],[111,true]];
t3 = new TypedMap("number","boolean", badentries );

console.log( t3 );
console.log(  );
console.log(  );
console.log(  );
console.log(  );


