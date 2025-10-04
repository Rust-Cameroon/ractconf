# Adding Speakers to the Rust Africa Campus Tour

## How to Add Speakers

To add new speakers to the conference website, simply edit the `public/speakers.json` file.

### Speaker JSON Structure

Each speaker should follow this format:

```json
{
  "id": 7,
  "name": "Speaker Name",
  "title": "Job Title",
  "company": "Company Name",
  "bio": "Brief biography of the speaker...",
  "image": "/api/placeholder/150/150",
  "social": {
    "twitter": "@twitterhandle",
    "linkedin": "linkedin-username",
    "github": "github-username"
  },
  "expertise": ["Rust", "Systems Programming", "Memory Safety"],
  "talk": "Title of their talk"
}
```

### Required Fields

- `id`: Unique number for each speaker
- `name`: Full name of the speaker
- `title`: Job title or role
- `company`: Company or organization
- `bio`: Brief biography (1-2 sentences)
- `expertise`: Array of skills/technologies (max 5 recommended)
- `talk`: Title of their presentation

### Optional Fields

- `image`: URL to speaker photo (currently using placeholder)
- `social`: Object containing social media handles
  - `twitter`: Twitter handle (without @)
  - `linkedin`: LinkedIn username
  - `github`: GitHub username

### Example

```json
{
  "id": 7,
  "name": "Dr. Jane Doe",
  "title": "Senior Rust Developer",
  "company": "TechCorp Africa",
  "bio": "Experienced systems programmer with 8+ years in Rust development. Passionate about teaching and mentoring African developers.",
  "image": "/api/placeholder/150/150",
  "social": {
    "twitter": "janedoe_rust",
    "linkedin": "janedoe",
    "github": "janedoe"
  },
  "expertise": ["Rust", "Systems Programming", "Teaching", "Mentoring"],
  "talk": "Building Scalable Systems with Rust in Africa"
}
```

### After Adding Speakers

1. Save the `speakers.json` file
2. Run `npm run build` to rebuild the site
3. Deploy the updated site

The speakers will automatically appear on the website with their information, talk titles, and social links.
