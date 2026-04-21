## Purpose

Two-layer form system with primitive inputs, React Hook Form wrappers, and Zod validation schemas.

## Requirements

### Requirement: Two-layer form architecture
The system SHALL implement forms in two layers: (1) primitive input components in `ui/primitives/Input/` that are uncontrolled HTML wrappers, and (2) React Hook Form wrappers in `ui/forms-rhf/` that connect primitives to form state via the Controller pattern.

#### Scenario: Primitive input layer
- **WHEN** an input primitive (e.g., InputField) is used directly
- **THEN** it SHALL function as a standard controlled/uncontrolled HTML input with `value`, `onChange`, `label`, `placeholder`, `disabled`, `errorMessage`, and `hasError` props

#### Scenario: RHF wrapper layer
- **WHEN** an RHF-wrapped component (e.g., InputFieldRHF) is used within a React Hook Form
- **THEN** it SHALL connect to form state via Controller and delegate rendering to the corresponding primitive

### Requirement: React Hook Form wrappers
The system SHALL provide RHF wrapper components: InputFieldRHF, TextareaFieldRHF, CheckboxFieldRHF, and SelectFieldRHF. Each wrapper SHALL use the React Hook Form Controller component to bridge form state with the primitive input.

#### Scenario: RHF error display
- **WHEN** a form field has a validation error
- **THEN** the RHF wrapper SHALL pass `hasError={true}` and the error message to the underlying primitive

### Requirement: Complete form components
The system SHALL provide six complete form components: FormNewsletter (email), FormForgotPassword (email), FormLogIn (email + password), FormContact (name, surname, email, message), FormRegister (email + password + terms), and FormShipping (fullName, location, deliveryNote, terms). Each form SHALL use React Hook Form with a Zod resolver for validation.

#### Scenario: Form submission with valid data
- **WHEN** a user submits a complete form with valid data
- **THEN** the form SHALL validate successfully and invoke the submission handler

#### Scenario: Form submission with invalid data
- **WHEN** a user submits a form with invalid data
- **THEN** the form SHALL display field-level validation errors without submitting

### Requirement: Zod validation schemas
The system SHALL define Zod schemas in `ui/forms/schemas.ts` for each form. Schemas SHALL enforce:
- **newsletterSchema**: email (required, valid format)
- **forgotPasswordSchema**: email (required, valid format)
- **logInSchema**: email (required, valid format), password (required)
- **contactSchema**: name (required), surname (required), email (required, valid format), message (10-500 characters)
- **registerSchema**: email (required, valid format), password (min 8 chars, must contain uppercase, lowercase, and digit), acceptTerms (must be true)
- **shippingSchema**: fullName (required), location (required), deliveryNote (optional), acceptTerms (must be true)

#### Scenario: Register password validation
- **WHEN** a user enters a password with fewer than 8 characters or missing uppercase/lowercase/digit
- **THEN** the registerSchema SHALL reject with an appropriate error message

#### Scenario: Contact message length validation
- **WHEN** a user enters a message shorter than 10 characters or longer than 500 characters
- **THEN** the contactSchema SHALL reject with the appropriate length error

#### Scenario: Terms acceptance required
- **WHEN** a user submits the register or shipping form without accepting terms
- **THEN** the schema SHALL reject with "You must accept the terms and conditions"

### Requirement: Type inference from schemas
Each Zod schema SHALL have a corresponding TypeScript type exported using `z.infer<>` (e.g., `NewsletterFormData`, `RegisterFormData`). These types SHALL be used as the form's generic type parameter in React Hook Form.

#### Scenario: Type safety
- **WHEN** a form component uses `useForm<RegisterFormData>()`
- **THEN** all field references SHALL be type-checked against the schema structure
