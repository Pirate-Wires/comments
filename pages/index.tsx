import Head from 'next/head';
import CommentSection from '@lib/components/comments/CommentSection';
import SidebarComments from '@lib/components/comments/SidebarComments';
import MessageBubbleButton from '@lib/components/comments/MessageBubbleButton';
import HeartButton from '@lib/components/comments/HeartButton';
import { CommentsContextProvider } from '@lib/hooks/use-comments';
import { ModalProvider } from '@lib/hooks/use-modal';

export default function Home(): JSX.Element {
  return (
    <>
      <Head>
        <title>Pirate Wire Comments</title>
        <meta name="description" content="Threaded comments written with Supabase and Next.js" />
      </Head>

      <CommentsContextProvider postId={1}>
        <ModalProvider>
          <div className="min-w-full min-h-screen dark:bg-gray-800 transition-all">
            <div className="p-2 sm:p-4 z-40 md:fixed top-0">
              <div className="flex md:flex-col flex-grow-0 space-x-1 md:space-x-0 md:space-y-2">
                <div className="flex-grow-0">
                  <MessageBubbleButton />
                </div>
                <div className="flex-grow-0">
                  <HeartButton />
                </div>
              </div>
            </div>

            <div className="max-w-prose mx-auto flex-grow">
              <CommentSection />
            </div>
            <SidebarComments />
          </div>
        </ModalProvider>
      </CommentsContextProvider>
    </>
  );
}
