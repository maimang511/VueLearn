### 函数声明和函数表达式

1.  写法： 
   - 函数声明：
```javascript
function foo() { 
    alert( "foo" ); 
}
```

   - 函数表达式：
```javascript
const foo = function() { 
    alert( "foo" ); 
}
```

2.  代表的含义： 
   - 上面这两段示例代码的意思都是“创建一个名为`foo`的函数”（函数也是对象）。
3.  创建时机： 
   - 函数声明：**解析器在向执行环境中加载数据时会率先读取函数声明，并使其在执行任何代码之前可用(可访问)，即函数声明提升。函数声明的另外一个特殊的功能是它们的块级作用域。严格模式下，当一个函数声明在一个代码块内时，它在该代码块内的任何位置都是可见的。但在代码块外不可见。**
   - 函数表达式：**在代码执行到表达式时被创建，被创建之前是调用不了的。**

### addEventListener 函数的第三个参数可以是什么？

- 当为 boolean 时： 
   - 第三个参数涉及到是冒泡还是捕获：为 true 时是捕获，为 false 时是冒泡。
- 当为 Object 时： 
   - capture： Boolean，表示 listener 会在该类型的事件捕获阶段传播到该 EventTarget 时触发。
   - once： Boolean，表示 listener 在添加之后最多只调用一次。如果是 true， listener 会在其被调用之后自动移除。
   - passive：Boolean，设置为 true 时，表示 listener 永远不会调用 preventDefault()。如果 listener 仍然调用了这个函数，客户端将会忽略它并抛出一个控制台警告。
   - mozSystemGroup：只能在 XBL 或者是 Firefox' chrome 使用，这是个 Boolean，表示 listener 被添加到 system group。

### JavaScript 数据类型

-   
#### JS 数据类型有：数字（number）、字符串（string）、布尔（bool）、符号（symbol）、空（undefined）、空（null）、对象（object）、bigint。

-   
#### JS 数据类型又可以分为两种

   - 基本数据类型：包括**Undefined、Null、Boolean、Number、String、Symbol、BigInt**七种基本数据类型。
   - 引用数据类型：**Object**。常见的有**对象、数组和函数**等。

### 基本数据类型和引用数据类型有什么区别？

#### 概念

- 基本数据类型：简单的数据段，表示不能再细分下去的基本类型。
- 引用数据类型：有多个值构成的对象。对象在逻辑上是属性的无序集合，是存放各种值的容器。对象值存储的是引用地址，所以和基本类型值不可变的特性不同，对象值是可变的。

#### 存放位置

-  基本数据类型：原始数据类型直接存储在栈（stack）中的简单数据段，占据空间小、大小固定，属于被频繁使用数据，所以放入栈中存储； 
-  引用数据类型：引用数据类型存储在堆（heap）中的对象，占据空间大、大小不固定。如果存储在栈中，将会影响程序运行的性能；**引用数据类型在栈中存储了指针，该指针指向堆中该实体的起始地址。当解释器寻找引用值时，会首先检索其在栈中的地址，取得地址后从堆中获得实体。** 

### typeof NaN的结果是什么？
NaN指“不是一个数字”（not a number），NaN 是一个“警戒值”（sentinel value，有特殊用途的常规值），用于指出数字类型中的错误情况，即“执行数学运算没有成功，这是失败后返回的结果”。
typeof NaN; // "number"
NaN是一个特殊值，它和自身不相等，是唯一一个非自反（自反，reflexive，即x === x不成立）的值。而NaN !== NaN为true。
