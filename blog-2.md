# BLOG-2

## How do Generics allow you to build reusable components and functions that stay strictly typed regardless of the data structures passed in?

For a large application, Declaring the same type agian and again becomes a problem for the developers. It also makes the code harder to maintain and scale. Fortunately Typescript has utility types to solve this problem. `Pick` and `Omit` are two of them. These tools actually help developers to keep their code clean and DRY (Don't Repeat Yourself).

### Pick

`Pick` creates a new type by selecting specific properties from an  existing interface. Such as:

```tsx
interface User {
    id: number;
    name: string;
    email: string;
    password: string;
    createdAt: Date;
}

type CreateUser = Pick<User, "name" | "email" | "password">;
```
Here, the type `CreateUser` stays connected to the original type `User` while having only selected properties.

### Omit

`Omit` actually does the opposite of `Pick`. Instead of selecting properties it removes them. Such as:

```tsx
interface User {
    id: number;
    name: string;
    email: string;
    password: string;
    createdAt: Date;
}

type PublicUser = Omit<User, "password">;
```
Here, the type `PublicUser` contains every properties from `User` except `password`.

#### Benefits of using utility types

* Instead of rewriting the properties all the times, the developer can reuse the original or the source type.
* If one or more properties needed to be updated, only updating the main property is enough.
* Maintanace becomes much easier and faster for large applications as developers don't need to repeat codes anymore.

This is how `Utility types` prevent repetition and keeps our code DRY.