import PropTypes from 'prop-types';
import { useEffect, useState, useRef } from 'react';
//
import Scrollbar from '../../../../components/scrollbar';
import Lightbox from '../../../../components/lightbox';
//
import ChatMessageItem from './ChatMessageItem';

// ----------------------------------------------------------------------

ChatMessageList.propTypes = {
  conversation: PropTypes.object,
  ccData: PropTypes.object
};

export default function ChatMessageList({ conversation, ccData }) {
  const ccMessage = ccData[0]

  console.log(ccData)
  const scrollRef = useRef(null);

  const [selectedImage, setSelectedImage] = useState(-1);

  /* useEffect(() => {
     const scrollMessagesToBottom = () => {
       if (scrollRef.current) {
         scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
       }
     };
     scrollMessagesToBottom();
   }, [conversation.messages]); */

  const imagesLightbox = conversation.messages
    .filter((messages) => messages.contentType === 'image')
    .map((messages) => ({ src: messages.body }));

  const handleOpenLightbox = (imageUrl) => {
    const imageIndex = imagesLightbox.findIndex((image) => image.src === imageUrl);
    setSelectedImage(imageIndex);
  };

  const handleCloseLightbox = () => {
    setSelectedImage(-1);
  };
  console.log(ccData)
  return (
    /*  <>
        <Scrollbar
          scrollableNodeProps={{
            ref: scrollRef,
          }}
          sx={{ p: 3, height: 1 }}
        >
          {ccData.map((message) => (
            <ChatMessageItem
              key={message.id}
              message={message}
              conversation={conversation}
              ccData={ccData}
              onOpenLightbox={() => handleOpenLightbox(message.body)}
            />
          ))}
        </Scrollbar>
  
        <Lightbox
          index={selectedImage}
          slides={imagesLightbox}
          open={selectedImage >= 0}
          close={handleCloseLightbox}
        />
      </> */

    <>
      <Scrollbar
        scrollableNodeProps={{
          ref: scrollRef,
        }}
        sx={{ p: 3, height: 1 }}
      >
        {ccData.map((data) => (
          <ChatMessageItem
            //  key={message.id}
            //  message={message}
            //  conversation={conversation}
            ccMessage={data}
          //    onOpenLightbox={() => handleOpenLightbox(message.body)}
          />
        ))}
      </Scrollbar>

      <Lightbox
        index={selectedImage}
        slides={imagesLightbox}
        open={selectedImage >= 0}
        close={handleCloseLightbox}
      />
    </>
  );
}
