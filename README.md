# Travel Item List

This is a React-based web application designed to simplify and streamline the process of preparing for a trip. This application enables users to effortlessly create, manage, and track their packing list items. With intuitive functionalities like adding items, marking them as packed or unpacked, sorting by different criteria, and providing insightful statistics, this tool ensures an organized and stress-free packing experience.

### Components :

**App Component (App.js):**

- Manages the state of the packing list items.
- Renders the main structure of the application including the Logo, Form, PackingList, and Stats components.

**Form Component (Form.js):**

- Renders a form for adding items to the packing list.
- Handles user input for item descriptions and quantities.
- Submits the form data to add items to the list.

**Item Component (Item.js):**

- Represents an individual item in the packing list.
- Displays the item's description and quantity along with checkboxes to mark items as packed and a delete button.

**Logo Component (Logo.js):**

- Displays the logo or title of the application.

**PackingList Component (PackingList.js):**

- Renders the list of packing items.
- Allows sorting items by different criteria (input order, description, packed status).
- Provides functionality to delete items, mark items as packed/unpacked, and reset/clear the entire list.

**Stats Component (Stats.js):**

- Displays statistics related to the packing list, such as the number of items, number of packed items, and a percentage indicating the progress of packing.

### Functionality:

- **Adding Items:** Users can add items to the packing list using the form component.
- **Deleting Items:** Items can be deleted individually from the list using the delete button in each item's section.
- **Marking Items as Packed/Unpacked:** Users can toggle the packed status of items by checking/unchecking the checkboxes.
- **Sorting Items:** The list can be sorted based on input order, description, or packed status.
- **Clearing the List:** There is an option to clear the entire packing list.
- **Statistics Display:** The statistics component shows information regarding the number of items and the percentage of items packed.

### Usage:

- Run the React application containing these components.
- The App component renders the UI with the packing list functionality.
- Users can interact with the form to add, delete, and manage items in the packing list.
- Sorting options and statistics provide additional functionalities for organizing and tracking the packing progress.
