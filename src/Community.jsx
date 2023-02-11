import React from 'react'

export default function Community() {
  return (
    <div className='community'>

      <section className='community-info'>
        <h1 className='community-heading'>Build The Community Your Fans Will Love</h1>
        <p>Huddle re-imagines the way we build communities. You have
            a voice, but so does your audience. Create connections with
            your users as you engage in genuine discussion.
        </p>
        <button className='community-btn'>Get Started For Free</button>
      </section>

      <section className='community-stats'>
          <img src='./src/screen-mockups.svg' alt='community-icon-message' className='stats-mockups'/>
          <div className='stats'>

            <div className='comm-formed'>
                <img src='./src/icon-communities.svg' alt='community-icon'/>
                <h1>1.4k+</h1>
                <p>Communities Formed</p>
            </div>

            <div className='messages'>
                <img src='./src/icon-messages.svg' alt='community-icon'/>
                <h1>2.7m+</h1>
                <p>Messages Sent</p>
            </div>
           </div>         
      </section>

      <section className='community-moto'>

        <div className='grow'>
            <div>
                <h1 className='grow-heading'>Grow Together</h1>
                <p className='grow-para'>Generate meaningfull discussions with your audience and build a strong,
                    loyal community. Think of insightful conversations you miss out on with
                    a feedback form.
                </p>
            </div>
            <img src='./src/illustration-grow-together.svg' alt='grow_together'/>
        </div>

        <div className='conversation'>
            <img src='./src/illustration-flowing-conversation.svg' alt='flowing_conversation'/>
            <div>
                <h1 className='conversation-heading'>Flowing Converstions</h1>
                <p className='conversation-para'> You wouldn't paginate a conversation in real life, so why do it online?
                    Our threads have just-in-time loading for a more natural life.
                </p>
            </div>
        </div>

        <div className='users'>
            <div>
                <h1 className='users-heading'>Your Users</h1>
                <p className='users-para'>It takes no time to integrate Huddle with your app's authentication solution.
                    This means, once signed in to your app, your users can start chatting immediately.           
                </p>
            </div>
            <img src='./src/illustration-your-users.svg' alt='grow_together'/>
        </div>
      </section>

      <section className='enrollment'>
        <h1 className='enroll-heading'>Ready To Build Your Community?</h1>
        <button className='community-btn enroll-btn'>Get Started For Free</button>
      </section>
    </div>
  )
}
