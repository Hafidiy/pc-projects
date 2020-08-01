import React from 'react'

const features = [
    {
        icon: 'ion-ios-tv',
        title: 'Ultra HD',
        text: 'If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of text.'
    },
    {
        icon: 'ion-ios-film',
        title: 'Film',
        text: 'All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first.'
    },
    {
        icon: 'ion-ios-trophy',
        title: 'Awards',
        text: 'It to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining.'
    },
    {
        icon: 'ion-ios-notifications',
        title: 'Notifications',
        text: 'Various versions have evolved over the years, sometimes by accident, sometimes on purpose.'
    },
    {
        icon: 'ion-ios-rocket',
        title: 'Rocket',
        text: 'It to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.'
    },
    {
        icon: 'ion-ios-globe',
        title: 'Multi Language Subtitles',
        text: 'Various versions have evolved over the years, sometimes by accident, sometimes on purpose.'
    }
]

const Features = () => {

    return(
        <>
            {features.map((feature, fIndex) => (
                <div key={fIndex} className='col-12 col-md-6 col-lg-4'>
                    <div className="feature">
                        <i className={`icon ${feature.icon} feature__icon`}></i>
                        <h3 className="feature__title">{feature.title}</h3>
                        <p className="feature__text">{feature.text}</p>
                    </div>
                </div>
            ))}
        </>
    )
}

export default Features