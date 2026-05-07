# BLOG-1

## Why is any labeled a "type safety hole," and why is unknown the safer choice for handling unpredictable data? Explain the concept of type narrowing.

As we know Typescript is very similar to Javascript except it is more sensitive to data types and offers some extra syntaxes. Unlike JS it gives us error on the first place when we apply a wrong property to something which doesn't have that property even before we run the code.

### any
The `any` type completely disables Typescript's type cheching method. Actually when we declare the type of a data as `any` Typescript starts to rely on us. Even invalid operations get compiled successfully. Such as:

```tsx
let value: any = "Hello";

console.log(value.toFixed(2));
```

This gives an error when we run the code. But doesn't warn us while coding because the type `any` prevents Typescript to check the type of a value.

### unknown
The `unknown` type also represents data which are unpredictable but in this case Typescript forces us to check the data type before using it. Such as:

```tsx
let value: unknown = "Hello";

value.toUpperCase();
```

Gives an error immediately.

This is the main reason why `unknown` is safer choice that `any` for handling unpredictable data.

### Type Narrowing
Type narrowing means reducing a broad type into a more specific one using checks like:
* `typeof`
* `instanceof`
* `Array.isArray()`

This method makes code safer and more predictable. Such as:

```tsx
let value: unknown = "Hello";

if (typeof value === "string") {
    console.log(value.toUpperCase());
}
```