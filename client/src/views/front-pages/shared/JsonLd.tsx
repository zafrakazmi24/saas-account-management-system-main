/**
 * Renders schema.org structured data as JSON-LD (helps search engines understand the page).
 * "<" is escaped so the JSON can never close the script tag early.
 */
const JsonLd = ({ data }: { data: Record<string, unknown> }) => (
  <script
    type='application/ld+json'
    dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, '\\u003c') }}
  />
)

export default JsonLd
