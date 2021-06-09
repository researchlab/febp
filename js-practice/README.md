Javascript 基础知识

申明一个变量
```
let message = 'hello'
```

8种数据类型 (7种原始类型和1种引用类型)

Number 类型
```
let n = 123
n = 12.222
```
Number 代表整数和浮点数

除了常规的数字，还包括所谓的“特殊数值（“special numeric values”）”也属于这种类型：Infinity、-Infinity 和 NaN。

Infinity 代表数学概念中的 无穷大 ∞。是一个比任何数字都大的特殊值。

```
alert( 1 / 0 ); // Infinity

alert ( Infinity )
```

NaN 代表一个计算错误。它是一个不正确的或者一个未定义的数学操作所得到的结果，比如：
not a number 
```
alert( "not a number" / 2 + 5 ); // NaN
```

BigInt类型

在 JavaScript 中，“number” 类型无法表示大于 (253-1)（即 9007199254740991），或小于 -(253-1) 的整数。这是其内部表示形式导致的技术限制。

在大多数情况下，这个范围就足够了，但有时我们需要很大的数字，例如用于加密或微秒精度的时间戳。

BigInt 类型是最近被添加到 JavaScript 语言中的，用于表示任意长度的整数。

可以通过将 n 附加到整数字段的末尾来创建 BigInt 值。

```
// 尾部的 "n" 表示这是一个 BigInt 类型
const bigInt = 1234567890123456789012345678901234567890n;
```

String 类型
JavaScript 中的字符串必须被括在引号里。

```
let str = "hello";
let phrase = `can embed another ${str}`
```

在 JavaScript 中，有三种包含字符串的方式。

双引号："Hello".
单引号：'Hello'.
反引号：`Hello`.
双引号和单引号都是“简单”引用，在 JavaScript 中两者几乎没有什么差别。

反引号是 功能扩展 引号。它们允许我们通过将变量和表达式包装在 ${…} 中，来将它们嵌入到字符串中。

Boolean 类型

boolean 类型仅包含两个值：true 和 false。


“null” 值

特殊的 null 值不属于上述任何一种类型。

它构成了一个独立的类型，只包含 null 值：

```
let age  = null
```

相比较于其他编程语言，JavaScript 中的 null 不是一个“对不存在的 object 的引用”或者 “null 指针”。

JavaScript 中的 null 仅仅是一个代表“无”、“空”或“值未知”的特殊值。

上面的代码表示 age 是未知的。


“undefined” 值
特殊值 undefined 和 null 一样自成类型。

undefined 的含义是 未被赋值。

如果一个变量已被声明，但未被赋值，那么它的值就是 undefined：

```
let age;

alert(age); // 弹出 "undefined"
```

从技术上讲，可以显式地将 undefined 赋值给变量：

```
let age = 100;

// 将值修改为 undefined
age = undefined;

alert(age); // "undefined"
```

但是不建议这样做。通常，使用 null 将一个“空”或者“未知”的值写入变量中，而 undefined 则保留作为未进行初始化的事物的默认初始值。

object 类型和 symbol 类型

object 类型是一个特殊的类型。

其他所有的数据类型都被称为“原始类型”，因为它们的值只包含一个单独的内容（字符串、数字或者其他）。相反，object 则用于储存数据集合和更复杂的实体。

symbol 类型用于创建对象的唯一标识符。我们在这里提到 symbol 类型是为了完整性，但我们要在学完 object 类型后再学习它。


typeof 运算符
typeof 运算符返回参数的类型。当我们想要分别处理不同类型值的时候，或者想快速进行数据类型检验时，非常有用。

它支持两种语法形式：

作为运算符：typeof x。
函数形式：typeof(x)。
换言之，有括号和没有括号，得到的结果是一样的。

对 typeof x 的调用会以字符串的形式返回数据类型：


```
typeof undefined // "undefined"

typeof 0 // "number"

typeof 10n // "bigint"

typeof true // "boolean"

typeof "foo" // "string"

typeof Symbol("id") // "symbol"

typeof Math // "object"  (1)

typeof null // "object"  (2)

typeof alert // "function"  (3)
```

typeof null 的结果是 "object"。这是官方承认的 typeof 的行为上的错误，这个问题来自于 JavaScript 语言的早期，并为了兼容性而保留了下来。null 绝对不是一个 object。null 有自己的类型，它是一个特殊值。


JavaScript 中有八种基本的数据类型（译注：前七种为基本数据类型，也称为原始类型，而 object 为复杂数据类型）。

- number 用于任何类型的数字：整数或浮点数，在 ±(253-1) 范围内的整数。

- bigint 用于任意长度的整数。

- string 用于字符串：一个字符串可以包含 0 个或多个字符，所以没有单独的单字符类型。

- boolean 用于 true 和 false。

- null 用于未知的值 —— 只有一个 null 值的独立类型。

- undefined 用于未定义的值 —— 只有一个 undefined 值的独立类型。

- symbol 用于唯一的标识符。

- object 用于更复杂的数据结构。

我们可以通过 typeof 运算符查看存储在变量中的数据类型。

- 两种形式：typeof x 或者 typeof(x)。

- 以字符串的形式返回类型名称，例如 "string"。

- typeof null 会返回 "object" —— 这是 JavaScript 编程语言的一个错误，实际上它并不是一个 object。

空值合并运算符 '??'

将值既不是 null 也不是 undefined 的表达式称为“已定义的（defined）”。

空值合并运算符（nullish coalescing operator）的写法为两个问号 ??。

a ?? b 的结果是：

如果 a 是已定义的，则结果为 a，
如果 a 不是已定义的，则结果为 b。
换句话说，如果第一个参数不是 null/undefined，则 ?? 返回第一个参数。否则，返回第二个参数。

空值合并运算符并不是什么全新的东西。它只是一种获得两者中的第一个“已定义的”值的不错的语法。

我们可以使用我们已知的运算符重写 result = a ?? b，像这样：

```
result = (a !== null && a !== undefined) ? a : b;
```

通常 ?? 的使用场景是，为可能是未定义的变量提供一个默认值。


与 || 比较
或运算符 || 可以以与 ?? 运算符相同的方式使用。像我们在 上一章 所讲的那样。

例如，在上面的代码中，我们可以用 || 替换掉 ??，也可以获得相同的结果：

```
let firstName = null;
let lastName = null;
let nickName = "Supercoder";

// 显示第一个真值：
alert(firstName || lastName || nickName || "Anonymous"); // Supercoder
```

或 || 运算符自 JavaScript 诞生就存在，因此开发者长期将其用于这种目的。

另一方面，空值合并运算符 ?? 是最近才被添加到 JavaScript 中的，它的出现是因为人们对 || 不太满意。

它们之间重要的区别是：

|| 返回第一个 真 值。
?? 返回第一个 已定义的 值。
换句话说，|| 无法区分 false、0、空字符串 "" 和 null/undefined。它们都一样 —— 假值（falsy values）。如果其中任何一个是 || 的第一个参数，那么我们将得到第二个参数作为结果。

不过在实际中，我们可能只想在变量的值为 null/undefined 时使用默认值。也就是说，当该值确实未知或未被设置时。

例如，考虑下面这种情况：

```
let height = 0;

alert(height || 100); // 100
alert(height ?? 100); // 0
```

height || 100 首先会检查 height 是否为一个假值，发现它确实是。
所以，结果为第二个参数，100。
height ?? 100 首先会检查 height 是否为 null/undefined，发现它不是。
所以，结果为 height 的原始值，0。

如果height 0 为有效值，则不应将其替换为默认值，所以 ?? 能够得出正确的结果。


优先级
?? 运算符的优先级相当低：在 MDN table 中为 5。因此，?? 在 = 和 ? 之前计算，但在大多数其他运算符（例如，+ 和 *）之后计算。

因此，如果我们需要在还有其他运算符的表达式中使用 ?? 进行取值，需要考虑加括号：

```
let height = null;
let width = null;

// 重要：使用括号
let area = (height ?? 100) * (width ?? 50);

alert(area); // 5000
```

?? 与 && 或 || 一起使用
出于安全原因，JavaScript 禁止将 ?? 运算符与 && 和 || 运算符一起使用，除非使用括号明确指定了优先级。

下面的代码会触发一个语法错误：

```
let x = 1 && 2 ?? 3; // Syntax error
```

这个限制无疑是值得商榷的，但它被添加到语言规范中是为了避免人们从 || 切换到 ?? 时的编程错误。

可以明确地使用括号来解决这个问题：

```
let x = (1 && 2) ?? 3; // 正常工作了

alert(x); // 2
```

总结

空值合并运算符 ?? 提供了一种从列表中选择第一个“已定义的”值的简便方式。

它被用于为变量分配默认值：

```
// 当 height 的值为 null 或 undefined 时，将 height 的值设置为 100
height = height ?? 100;
```

?? 运算符的优先级非常低，仅略高于 ? 和 =，因此在表达式中使用它时请考虑添加括号。

如果没有明确添加括号，不能将其与 || 或 && 一起使用。
