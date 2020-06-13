### Development Instructions

---
- Work on a separate branch. Create Pull Requests for merging things to master. Reviews are done before merging.
- The Pull Requests should mentions what is the update you are providing.
- The Commit Message should neat enough. Follow the guidelines [below](#commit). Use the same format for pull requests also.
- You should develop components as isolated as possible. (use storybook to maintain the isolation)
- Each component should have at least a story. It should describe the whole component. So that we can develop reusable products.
- You should use tailwind css utility classes for developing this css project.
- Any updates in utility classes needed. should raise an issue. We'll resolve it aka possible. or create a branch edit the tailwind css configuration file. Then create a pull request. We'll review it. 
- Each PR will have a preview deployment. After all reviews are done, The pull requests will be merged.
- Any prebuilt css frameworks are used. Then use utility classes to override the css. See Tailwind Documentation for more details.
- For Tailwind documentation goto [TailwindCSS](https://tailwindcss.com/).
- For Storybook documentation goto [Storybook](https://tailwindcss.com/).
- Get Tutorial for Storybook [LearnStorybook](https://www.learnstorybook.com/). Get a intro from here to get started.

<h3 id="commit">Commit Guidelines</h3>

---
```
Short (50 chars or less) summary of changes

More detailed explanatory text, if necessary. Wrap it to
about 72 characters or so. In some contexts, the first
line is treated as the subject of an email and the rest of
the text as the body. The blank line separating the
summary from the body is critical (unless you omit the body
entirely); tools like rebase can get confused if you run
the two together.

Further paragraphs come after blank lines.

    - Bullet points are okay, too

    - Typically a hyphen or asterisk is used for the bullet,
      preceded by a single space, with blank lines in
      between, but conventions vary here
```
