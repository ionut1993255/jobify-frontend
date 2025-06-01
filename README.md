# Jobify

Welcome to `Jobify`, a powerful web application designed for recruiters.
Built using modern web technologies including `Vue 3`, `Quasar Framework`, `TypeScript` and `SCSS`,
our platform offers an intuitive interface for managing jobs efficiently.

## Installation Guide

1. Install the dependencies:
   `npm install`
2. Run the Quasar development server:
   `quasar dev`

> Make sure to clone and install the backend from the following repository:
[https://github.com/ionut1993255/jobify-backend-spring-boot](https://github.com/ionut1993255/jobify-backend-spring-boot)

## Key Features

- **Home Page:** Users land on the home page where they can navigate to job list by clicking the `Explore Jobs` button.
- **Job List Page:** The job list page displays available jobs in descending chronological order.
  Each job card includes `Read More` button where the user can navigate to `Job Details Page`
  and `More` and `Less` buttons to control the display of job description
  (limited to 90 characters initially, avoiding word truncation).
  Initially, six jobs are loaded, with a `Load More Jobs` button to fetch more as needed.
- **Job Details Page:** Each job has a dedicated details page, providing comprehensive information about the job,
  including three buttons: `Back To Job List`, `Edit Job` and `Delete Job`.
- **Add & Edit Job Pages:** Users can add new jobs via a dedicated form and edit existing job details
  using a pre-filled form.
- **Contact Page:** This page is divided into two equal sections as following:
  `Left card` - contains `Jobify`’s address, email and phone number along with an embedded
  Google Map location.
  `Right card` - includes a contact form that allows users to send messages directly to `Jobify`.
  A success notification appears upon submission.
- **Loading Spinner:** A spinner is displayed while data is loading on the job details, job list and edit job pages.
- **Notifications:** Confirmation messages appear after adding, editing or deleting a job and when successfully
  submitting the contact form.
- **404 Page:** A `PageNotFound.vue` file is included to handle non-existent routes.

## Project Structure

- **pages** folder: `HomePage.vue`, `JobsPage.vue`, `AddNewJobPage.vue`, `JobDetailsPage.vue`,
  `EditJobPage.vue`, `ContactPage.vue`, `PageNotFound.vue`

- **components** folder:

    - **home** folder: `Home.vue`
    - **jobs** folder: `JobItem.vue`, `JobList.vue`, `AddNewJob.vue`, `JobDetails.vue`, `EditJob.vue`,
      `job-dropdown-options.ts`
    - **contact** folder: `Contact.vue`
    - **types/interfaces.ts:** contains interfaces as following: `NavLink`, `Job`, `JobDropdownOption`,
      `ContactForm`
    - **ui** folder: contains reusable components as following: `ConfirmDeleteModal.vue`, `CustomButton.vue`,
      `DatePicker.vue`, `Footer.vue`, `Form.vue`, `FormGroup.vue`, `FormLayout.vue`, `Heading.vue`,
      `Image.vue`,`Input.vue`, `Label.vue`, `Loader.vue`, `Navbar.vue`, `NavLinks.vue`, `Select.vue`,
      `Textarea.vue`, `Toggler.vue`

- **router** folder:

    - **routes.ts** file: contains all the routes of the application

- **utils** folder: contains files with reusable functions as following:
    - `showNotification`: displays notifications using Quasar's `Notify`
    - `validateDate`: ensures that a date is chosen

## API & Data Handling

- **Environment Variables:** uses `.env` file with `API_URL` configuration
- **Axios Configuration:** custom instance with `baseURL` from environment variables

## Technologies Used

- **Vue 3 (Options API):** core framework
- **Quasar Framework:** UI components and utilities
- **TypeScript:** type safety and maintainability
- **SCSS:** modular styling
- **Vue Router:** navigation management
- **Axios:** API requests
- **Google Maps API:** location display

## Conclusion

The `Jobify` project is a feature-rich job management platform showcasing the power of `Vue 3`, `Quasar Framework`,
`TypeScript` and `SCSS`.
Check out the custom favicon 😉
Get started now with `Jobify`!
