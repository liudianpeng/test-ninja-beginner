/**
 JSON(JavaScript Object Notation)： 是一种轻量级的数据交换格式

 一、JSON建构有两种结构：对象和数组
 1、对象：对象在js中表示为“{}”扩起来的内容，数据结构为 {key：value，key：value,...}的键值对的结构，在面向对象的语言中，key为对象的属性，value为对应的属性值，所以很容易理解，取值方法为 对象.key 获取属性值，这个属性值的类型可以是 数字、字符串、数组、对象几种。
 2、数组：数组在js中是中括号“[]”扩起来的内容，数据结构为 ["java","javascript","vb",...]，取值方式和所有语言中一样，使用索引获取，字段值的类型可以是 数字、字符串、数组、对象几种。
 经过对象、数组2种结构就可以组合成复杂的数据结构了。
 二、具体形式
 1、对象

 （1）一个对象以“{”（左括号）开始，“}”（右括号）结束。
 （2）每个“名称”后跟一个“:”（冒号）
 （3）“‘名称/值’ 对”之间使用“,”（逗号）分隔
 例子：表示人的一个对象：
 {
 "姓名" : "大憨",
 "年龄" : 24
 }
 2、数组是值（value）的有序集合。
 （1）一个数组以“[”（左中括号）开始，“]”（右中括号）结束。
 （2）值之间使用“,”（逗号）分隔。
 例子：一组学生
 {
 "学生" :
 [
 {"姓名" : "小明" , "年龄" : 23},
 {"姓名" : "大憨" , "年龄" : 24}
 ]
 }
 说明：此Json对象包括了一个学生数组，而学生数组中的值又是两个Json对象。

 说了这些基本了解json的数据结构了...
 */
package utils.json_arrayList;