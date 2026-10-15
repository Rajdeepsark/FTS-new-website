/**
 * The studio's contact address: the footer's "Contact us today" link and the
 * project pages' screener requests both write to it.
 */
export const email = "hello@flyingturtlestudio.in";

/**
 * A `mailto:` link to the studio with the subject and body filled in.
 */
export const mailto = (subject: string, body: string) =>
  `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
