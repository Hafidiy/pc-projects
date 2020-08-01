import React from 'react'

import Header from '../../components/main-header'
import Title from '../../components/main-title'
import Footer from '../../components/main-footer'

const faqArr = [
    {
        title: 'Why is a Video is not loading?',
        text1: 'All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.',
        text2: 'Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).'
    },
    {
        title: 'Why isn\'t there a HD version of this video?',
        text1: 'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy.'
    },
    {
        title: 'Why is the sound distorted?',
        text1: 'Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).',
    },
    {
        title: 'Why is the Video stuttering, buffering or randomly stopping?',
        text1: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable.'
    },
    {
        title: 'When I change the quality of a video, nothing happens.',
        text1: 'If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of text.'
    },
    {
        title: 'Why isn\'t the video starting at the beginning?',
        text1: 'The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English.',
    },
    {
        title: 'How do I make the Video go Fullscreen?',
        text1: 'It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.'
    },
    {
        title: 'What Browsers are supported?',
        text1: 'It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    },
    {
        title: 'How do you handle my privacy?',
        text1: 'Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).'
    },
    {
        title: 'How can I contact you?',
        text1: 'The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English.'
    },
]

const Faq = () => {

    return(
        <>
            <Header />
            <Title title='FAQ' />
            {/* faq */}
            <section className="section">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-6">
                            {faqArr.slice(0, 5).map((faq, fIndex) => (
                                <div key={fIndex} className="faq">
                                    <h3 className="faq__title">{faq.title}</h3>
                                    <p className="faq__text">{faq.text1}</p>
                                    {faq.text2 ? (
                                        <p className='faq__text'>{faq.text2}</p>
                                    ) : null}
                                </div>
                            ))}
                        </div>

                        <div className="col-12 col-md-6">
                            {faqArr.slice(5).map((faq, fIndex) => (
                                <div key={fIndex} className="faq">
                                    <h3 className="faq__title">{faq.title}</h3>
                                    <p className="faq__text">{faq.text1}</p>
                                    {faq.text2 ? (
                                        <p className='faq__text'>{faq.text2}</p>
                                    ) : null}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            {/* end faq */}
            <Footer />
        </>
    )
}

export default Faq