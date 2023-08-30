export class Slug {
  public value: string

  constructor(value: string) {
    this.value = value
  }

  /**
   * Receive a string and and normalize it to a slug
   *
   * Example: "An exemplar slug" -> "an-exemplar-slug"
   * @param text {string} The text to slugify
   */

  static createFromText(text: string): Slug {
    const slugText = text
      .normalize('NFKD')
      .toLowerCase()
      .trim()
      .replace(/\s+/g, '-')
      .replace(/[^\w-]+/g, '')
      .replace(/_/g, '-')
      .replace(/--+/g, '-')
      .replace(/-$/g, '')

    return new Slug(slugText)
  }
}
