import { size } from 'lodash'
import { useState } from 'react'

const LessMoreText = ({ template } : ILessMoreText) => {
  const [readMore, setReadMore] = useState<boolean>(false)
  const [truncateLength] = useState<number>(1300)

  const breakParagraph = (text: any) => {
    if (!text) {
      return null;
    }
  
    const sentences = text.split('. ');
    const paragraphs: any = [];
    let paragraph = '';
  
    sentences.forEach((sentence: any, index: any) => {
      paragraph += sentence + '. ';
  
      if ((index + 1) % 5 === 0 || index === sentences.length - 1) {
        paragraphs.push(paragraph);
        paragraph = '';
      }
    });
  
    return paragraphs.map((item: any, i: any) => (
      <p key={i}>{item} <br /></p>
    ));
  };

  const processedTemplate = readMore
  ? breakParagraph(template)
  : breakParagraph(template?.substring(0, truncateLength));

  return (
    <>
     {processedTemplate}
      {template.length > truncateLength && (
        <a role='button' onClick={() => setReadMore(!readMore)} className='font-weight-600' style={{ textDecoration: 'underline' }}>
          {readMore ? 'Show Less' : 'More...'}
        </a>
      )}
    </>
  )
}

export default  LessMoreText

interface ILessMoreText {
  template: string
}

