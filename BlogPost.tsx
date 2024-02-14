import Link from 'next/link';
import { format, parseISO } from 'date-fns';

export default function BlogPost({
  slug,
  title,
  date
}: {
  slug: string;
  title: string;
  date: string;
}) {
  const formattedDate = format(parseISO(date), 'yyyy MMM dd');

  return (
    <div className="mb-8">
      <time
        dateTime={date}
        className="block mb-2 text-sm text-gray-700 dark:text-gray-300"
      >
        {formattedDate}
      </time>
      <Link href={`/blog/${slug}`}>
        <h4 className="font-semibold text-2xl text-gray-900 dark:text-gray-100 hover:underline hover:underline-offset-2">
          {title}
        </h4>
      </Link>
    </div>
  );
}
