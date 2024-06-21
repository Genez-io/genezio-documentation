---
sidebar_position: 1
description: This page will explain how to structure your genezio project when using Go for the backend language.
---

# Getting Started

<head>
  <title>Getting Started with Go</title>
</head>

This page will explain how to structure your genezio project when using Go for the backend language.

### Project Structure

Because Go declarations belong to packages instead of files, genezio allows one deployable genezio class per package. This means that for a project with 2 genezio classes, a valid project structure should look like this:

```
.
├── genezio.yaml
├── go.mod
├── users
│   └── users.go
└── tasks
    └── tasks.go
```

Each class has its dedicated folder (package). The package can contain multiple files and even have functions or types distributed in many files of the same package, as Go sees them in the same scope.

### “Classes”

Go doesn’t have the notion of “classes”. We have, thankfully, an alternative. Structs with attached methods. For the rest of this page, we will refer to them as `genezio classes`, or simply `classes`. Our parser will choose and analyze the first struct it finds (not necessarily the first declared) that has the following properties:

- is exported (starts with a capital letter)
- has at least one method attached
- the package exports a method named `New` which takes no parameters and returns an instance of the struct

### Methods

Each method that will eventually be deployed needs to respect some signature rules:

- a method can take any number of parameters as long as they are serializable (see [Serialization rules](#serialization-rules))
- it returns an error or a tuple formed by a type and an error (error can be either the standard interface defined in the standard library, or any custom type implementing that interface)

```go
func (u UserService) Get(id int) (*User, error) // valid
func (u *UserService) Delete(user User) error // valid
func (u *UserService) GetAge(user *User) int // NOT VALID, shlould return (int, error)
```

Notice that we can attach methods to the value of a struct as well as to a pointer of that struct. You can use and mix those kinds of declarations as you wish. It makes no difference for the SDK generation or the way your code runs on the genezio infrastructure.

Example of a valid “genezio class” in Go:

```go
package users

import (
	"fmt"

	"go-example/models"
)

// the genezio class
// genezio: deploy
type UserService struct{}

func New() UserService {
	return UserService{}
}

func (u UserService) GetAge(name string, age *int) (int, error) {
	fmt.Println("Get Age for", name)
	if age == nil {
		return 0, fmt.Errorf("age is nil")
	}
	return *age, nil
}

func (u *UserService) Unimplemented() error {
	fmt.Println("Unimplemented")
	return fmt.Errorf("not implemented")
}

func (u *UserService) Delete(user *models.User) (*models.User, error) {
	if user == nil {
		return nil, fmt.Errorf("user is nil")
	}
	fmt.Println("Deleted user")
	return user, nil
}
```

Notice you can import types from other packages. They also have to satisfy the same rules for serialization.

### Serialization rules

- primitive types (int, float64, bool, string), are serializable
- structs are serializable
- arrays are serializable
- maps are serializable as long as the key is `string` and the value type is serializable
- if an argument is a pointer, that means it is an optional argument (can be null)
- if a struct property is a pointer, it means it is an optional property (can be null)
- interfaces are NOT serializable

### Current limitations

- json tags on struct properties currently not supported
- no support for enums
