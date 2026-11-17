# Question 3: Student Registration Form with HTML Validation

## Question Statement
Design and develop an HTML registration form using different input types and form elements. Apply appropriate HTML validation attributes to validate user input.

---

## Aim
To create a student registration form (`registrationForm.html`) using different input types and HTML validation attributes.

---

## Input Types & Form Elements Used
| Element / Type | Field Name | Description |
| :--- | :--- | :--- |
| `text` | `fullName` | Full name input with pattern restriction |
| `email` | `emailAddress` | Email input with standard syntax validation |
| `tel` | `mobileNumber` | Telephone input with regex for Indian mobile numbers |
| `date` | `dateOfBirth` | Native date picker with minimum and maximum bounds |
| `radio` | `gender` | Radio buttons for single option selection |
| `select` | `courseName` | Dropdown select list for degree courses |
| `number` | `yearOfStudy` | Numeric counter bounded between year 1 and 4 |
| `checkbox` | `interests`, `termsAccepted` | Multi-choice interest tags and mandatory declaration checkbox |
| `url` | `githubProfile` | Enforces standard web URL protocol format |
| `file` | `resumeFile` | File upload element restricted to `.pdf` |
| `password` | `accountPassword` | Obscured input requiring alphanumeric credentials |
| `textarea` | `currentAddress` | Multi-line text field for physical address |
| `button` (submit, reset) | Register, Clear Form | Action buttons to submit or clear form entries |

---

## Validation Attributes Used
| Attribute | Use |
| :--- | :--- |
| `required` | Field cannot be left empty upon submission |
| `minlength` / `maxlength` | Minimum and maximum number of allowed characters |
| `min` / `max` | Smallest and largest allowed number or date |
| `pattern` | Value must match a specific regular expression |
| `title` | Message that explains the expected pattern when validation fails |
| `placeholder` | Hint text displayed inside an empty field |
| `accept` | Allowed file extensions or MIME types for upload |

---

## Form Validation & CSS Styling
Visual feedback is provided dynamically through CSS `:valid` and `:invalid` pseudo-classes:
```css
input:invalid {
  border: 1px solid red;
}
input:valid {
  border: 1px solid green;
}
```

---

## Git Workflow
```bash
git add registrationForm.html
git commit -m "Added student registration form with HTML validation"
git push
```

---

## Result
The form blocks submission until every required field is filled in the correct format. Invalid fields show a red border and a browser validation message, while valid entries show a green border.
