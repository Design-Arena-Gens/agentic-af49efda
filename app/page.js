'use client';

import { useState } from 'react';

export default function Home() {
  const [activeSection, setActiveSection] = useState('intro');

  const sections = {
    intro: {
      title: 'Introduction: The Path to Mastery',
      content: (
        <>
          <p>
            Success is not an accident. It's not luck, talent, or circumstances. Success is the inevitable result of discipline, unwavering focus, and adherence to fundamental principles that have stood the test of time.
          </p>
          <p>
            This guide will reveal the systematic approach to building an extraordinary life. You'll discover that success is a formula—one that anyone can follow if they're willing to pay the price of discipline.
          </p>
          <div className="quote-box">
            "We are what we repeatedly do. Excellence, then, is not an act, but a habit." — Aristotle
          </div>
          <p>
            The journey ahead requires courage. It demands that you face uncomfortable truths about yourself and commit to transformation. But if you're ready to become the architect of your own destiny, turn to the next chapter and let's begin.
          </p>
        </>
      ),
    },
    discipline: {
      title: 'Chapter 1: The Foundation of Discipline',
      content: (
        <>
          <h3>What is True Discipline?</h3>
          <p>
            Discipline is not punishment or restriction—it's freedom. It's the bridge between goals and accomplishment, between dreams and reality. Discipline is choosing what you want most over what you want now.
          </p>

          <h3>The Discipline Framework</h3>
          <ul>
            <li><strong>Self-Control:</strong> The ability to regulate your emotions, thoughts, and behaviors in the face of temptations and impulses.</li>
            <li><strong>Consistency:</strong> Showing up every single day, regardless of motivation or circumstances.</li>
            <li><strong>Delayed Gratification:</strong> Sacrificing immediate pleasure for long-term rewards.</li>
            <li><strong>Personal Accountability:</strong> Taking complete ownership of your results without blame or excuses.</li>
          </ul>

          <h3>Building Your Discipline Muscle</h3>
          <p>
            Discipline is like a muscle—it grows stronger with use. Start small. Wake up at the same time every day. Make your bed. Complete one task before allowing distractions. These small victories compound into an unshakeable character.
          </p>

          <div className="quote-box">
            "Discipline equals freedom." — Jocko Willink
          </div>

          <h3>The Morning Ritual</h3>
          <p>
            How you start your day determines how you live your life. Establish a morning routine that sets the tone for excellence:
          </p>
          <ol>
            <li>Wake up at the same time daily (preferably before 6 AM)</li>
            <li>Hydrate immediately (16-32 oz of water)</li>
            <li>Move your body (exercise, stretch, or walk)</li>
            <li>Feed your mind (read, meditate, or journal)</li>
            <li>Plan your day with intention</li>
          </ol>

          <p>
            This ritual isn't negotiable. It's the foundation upon which your entire day is built. Miss this, and you start behind.
          </p>
        </>
      ),
    },
    focus: {
      title: 'Chapter 2: The Power of Laser Focus',
      content: (
        <>
          <h3>The Attention Economy</h3>
          <p>
            We live in an age of distraction. Every notification, every scroll, every ping is designed to steal your most valuable asset: your attention. Those who succeed in the modern world are not the most talented—they're the most focused.
          </p>

          <h3>The Three Levels of Focus</h3>
          <ul>
            <li><strong>Environmental Focus:</strong> Controlling your physical space to eliminate distractions.</li>
            <li><strong>Mental Focus:</strong> Training your mind to sustain attention on a single task.</li>
            <li><strong>Strategic Focus:</strong> Aligning your daily actions with your long-term vision.</li>
          </ul>

          <h3>Deep Work Protocol</h3>
          <p>
            Implement these strategies to achieve peak concentration:
          </p>
          <ol>
            <li><strong>Time Blocking:</strong> Schedule specific blocks for deep, uninterrupted work (minimum 90 minutes)</li>
            <li><strong>The Phone Fast:</strong> Remove your phone from your workspace during focus sessions</li>
            <li><strong>Single-Tasking:</strong> One task, one goal, one outcome at a time</li>
            <li><strong>The 5-Minute Rule:</strong> When starting a difficult task, commit to just 5 minutes of focus</li>
            <li><strong>Energy Management:</strong> Schedule your most important work during your peak energy hours</li>
          </ol>

          <div className="quote-box">
            "The successful warrior is the average man, with laser-like focus." — Bruce Lee
          </div>

          <h3>Eliminating Digital Distractions</h3>
          <p>
            Your smartphone is an attention vampire. Take back control:
          </p>
          <ul>
            <li>Delete social media apps from your phone</li>
            <li>Turn off all non-essential notifications</li>
            <li>Use website blockers during work hours</li>
            <li>Establish "no phone zones" (bedroom, dining table, first hour of the day)</li>
            <li>Check email only at scheduled times (not continuously)</li>
          </ul>

          <h3>The Focus Formula</h3>
          <p>
            Quality of Work = Time Spent × Intensity of Focus. You can work 12 hours with scattered attention or 4 hours with complete focus. The latter produces superior results.
          </p>
        </>
      ),
    },
    rules: {
      title: 'Chapter 3: The 12 Unbreakable Rules',
      content: (
        <>
          <p>
            These are non-negotiable principles for success. Follow them without exception, and watch your life transform.
          </p>

          <ol className="rules-list">
            <li>
              <strong>Take 100% Responsibility</strong>
              <br />
              Stop blaming others, circumstances, or bad luck. You are the creator of your experience. Everything in your life is the result of your decisions.
            </li>
            <li>
              <strong>Do the Hard Things First</strong>
              <br />
              Attack your most difficult, important task first thing in the morning. Win the morning, win the day.
            </li>
            <li>
              <strong>Never Break a Promise to Yourself</strong>
              <br />
              Your self-trust is everything. If you say you'll do something, do it. No exceptions, no excuses.
            </li>
            <li>
              <strong>Embrace Discomfort Daily</strong>
              <br />
              Do one thing every day that scares you. Growth lives outside your comfort zone.
            </li>
            <li>
              <strong>Protect Your Time Like Your Life Depends On It</strong>
              <br />
              Because it does. Say no to everything that doesn't align with your goals. Guard your calendar ruthlessly.
            </li>
            <li>
              <strong>Invest in Yourself First</strong>
              <br />
              Spend time and money on your education, health, and skills before anything else. You are your greatest asset.
            </li>
            <li>
              <strong>Surround Yourself with Excellence</strong>
              <br />
              You become the average of the five people you spend the most time with. Choose wisely.
            </li>
            <li>
              <strong>Measure Everything</strong>
              <br />
              What gets measured gets improved. Track your progress, habits, and results daily.
            </li>
            <li>
              <strong>Action Beats Perfection</strong>
              <br />
              Done is better than perfect. Take imperfect action now rather than perfect action never.
            </li>
            <li>
              <strong>Never Negotiate with Weakness</strong>
              <br />
              When you feel like quitting, that's when you push harder. The moment of greatest resistance is the moment before breakthrough.
            </li>
            <li>
              <strong>Master Your Morning, Master Your Life</strong>
              <br />
              The first hour of the day sets the tone for everything that follows. Win it with intention.
            </li>
            <li>
              <strong>Rest is Part of the Work</strong>
              <br />
              Recovery is not optional. Sleep 7-8 hours, take rest days, and respect your body's need for restoration.
            </li>
          </ol>

          <div className="quote-box">
            "Rules are the invisible architecture of daily life. Without them, chaos reigns."
          </div>
        </>
      ),
    },
    pillars: {
      title: 'Chapter 4: The 7 Pillars of Success',
      content: (
        <>
          <p>
            Success is not built on a single foundation—it rests on seven pillars. Neglect one, and the entire structure weakens. Master all seven, and you become unstoppable.
          </p>

          <div className="pillars-grid">
            <div className="pillar-card">
              <h3>1. Physical Excellence</h3>
              <p>Your body is your vehicle through life. Maintain it with daily exercise, proper nutrition, adequate sleep, and regular health check-ups.</p>
              <p><strong>Action:</strong> Exercise 5x per week, eat whole foods, sleep 7-8 hours.</p>
            </div>

            <div className="pillar-card">
              <h3>2. Mental Mastery</h3>
              <p>Your mind is your most powerful tool. Sharpen it through reading, learning new skills, solving complex problems, and practicing mindfulness.</p>
              <p><strong>Action:</strong> Read 30 minutes daily, learn one new skill per quarter, meditate 10 minutes daily.</p>
            </div>

            <div className="pillar-card">
              <h3>3. Emotional Intelligence</h3>
              <p>Success requires managing your emotions and understanding others. Develop self-awareness, empathy, and the ability to remain calm under pressure.</p>
              <p><strong>Action:</strong> Journal daily, practice empathy, respond instead of react.</p>
            </div>

            <div className="pillar-card">
              <h3>4. Financial Wisdom</h3>
              <p>Money is a tool for freedom. Learn to earn more, spend less, invest wisely, and build multiple income streams.</p>
              <p><strong>Action:</strong> Track every expense, save 20% of income, invest consistently, increase your skills and value.</p>
            </div>

            <div className="pillar-card">
              <h3>5. Relationship Quality</h3>
              <p>Your network is your net worth. Build genuine relationships, add value first, and surround yourself with people who elevate you.</p>
              <p><strong>Action:</strong> Reach out to one person weekly, add value without expectation, cut toxic relationships.</p>
            </div>

            <div className="pillar-card">
              <h3>6. Spiritual Depth</h3>
              <p>Connect to something greater than yourself. Whether through meditation, nature, religion, or philosophy—find your source of meaning.</p>
              <p><strong>Action:</strong> Establish a daily spiritual practice, define your values, contribute to causes you believe in.</p>
            </div>

            <div className="pillar-card">
              <h3>7. Contribution & Legacy</h3>
              <p>True success is measured by what you give, not what you get. Build something that outlasts you and improves the lives of others.</p>
              <p><strong>Action:</strong> Mentor someone, create value for others, work on projects that matter beyond your lifetime.</p>
            </div>
          </div>

          <div className="quote-box">
            "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful." — Albert Schweitzer
          </div>

          <h3>The Balance Principle</h3>
          <p>
            These seven pillars must be developed in parallel. Achieving wealth while destroying your health is not success—it's a tragedy. Building a business while neglecting relationships leaves you rich and lonely. Strive for excellence across all domains.
          </p>
        </>
      ),
    },
    action: {
      title: 'Chapter 5: Your 90-Day Transformation Plan',
      content: (
        <>
          <h3>From Knowledge to Action</h3>
          <p>
            Reading this book changes nothing. Applying these principles changes everything. Here's your roadmap to radical transformation in just 90 days.
          </p>

          <h3>Week 1-2: Foundation Phase</h3>
          <ul>
            <li>Establish your non-negotiable morning routine</li>
            <li>Audit your current habits and time usage</li>
            <li>Eliminate one major distraction (social media, TV, toxic relationship)</li>
            <li>Set clear, written goals for the next 90 days</li>
            <li>Create your ideal daily schedule</li>
          </ul>

          <h3>Week 3-4: Build Momentum</h3>
          <ul>
            <li>Track your daily progress in a journal</li>
            <li>Implement time-blocking for your most important work</li>
            <li>Add 30 minutes of reading to your daily routine</li>
            <li>Start a consistent exercise program (5x per week)</li>
            <li>Review and adjust your systems</li>
          </ul>

          <h3>Week 5-8: Amplification Phase</h3>
          <ul>
            <li>Double down on what's working</li>
            <li>Add a new skill-building activity</li>
            <li>Increase your deep work sessions to 2-3 per day</li>
            <li>Reach out to 5 new people in your field</li>
            <li>Optimize your nutrition and sleep</li>
          </ul>

          <h3>Week 9-12: Mastery Phase</h3>
          <ul>
            <li>Your habits should now feel automatic</li>
            <li>Focus on refinement and optimization</li>
            <li>Take on a challenging project that scares you</li>
            <li>Mentor someone else starting their journey</li>
            <li>Plan your next 90-day cycle</li>
          </ul>

          <div className="quote-box">
            "A journey of a thousand miles begins with a single step." — Lao Tzu
          </div>

          <h3>The Daily Scorecard</h3>
          <p>Track these metrics every single day:</p>
          <ul>
            <li>✓ Woke up on time</li>
            <li>✓ Completed morning routine</li>
            <li>✓ Exercised</li>
            <li>✓ Ate healthy meals</li>
            <li>✓ Completed top 3 priorities</li>
            <li>✓ Read for 30 minutes</li>
            <li>✓ No social media/distractions during work</li>
            <li>✓ Connected with important people</li>
            <li>✓ Journaled/reflected</li>
            <li>✓ In bed by target time</li>
          </ul>

          <p>
            Aim for 8/10 or better every day. String together 90 days of 8/10 or better, and your life will be unrecognizable.
          </p>

          <h3>The Final Truth</h3>
          <p>
            Everything you need is already within you. This book didn't give you new abilities—it reminded you of the power you've always had. Now it's time to use it.
          </p>
          <p>
            The person you're capable of becoming is waiting for you to take action. Don't let them down.
          </p>
          <p>
            Start now. Not tomorrow. Not Monday. Now.
          </p>
        </>
      ),
    },
  };

  return (
    <main>
      <div className="hero">
        <h1>THE DISCIPLINE CODE</h1>
        <p>
          Master the timeless principles of discipline, focus, and success to build an extraordinary life
        </p>
      </div>

      <div className="nav-buttons">
        <button
          className={`nav-button ${activeSection === 'intro' ? 'active' : ''}`}
          onClick={() => setActiveSection('intro')}
        >
          Introduction
        </button>
        <button
          className={`nav-button ${activeSection === 'discipline' ? 'active' : ''}`}
          onClick={() => setActiveSection('discipline')}
        >
          Discipline
        </button>
        <button
          className={`nav-button ${activeSection === 'focus' ? 'active' : ''}`}
          onClick={() => setActiveSection('focus')}
        >
          Focus
        </button>
        <button
          className={`nav-button ${activeSection === 'rules' ? 'active' : ''}`}
          onClick={() => setActiveSection('rules')}
        >
          12 Rules
        </button>
        <button
          className={`nav-button ${activeSection === 'pillars' ? 'active' : ''}`}
          onClick={() => setActiveSection('pillars')}
        >
          7 Pillars
        </button>
        <button
          className={`nav-button ${activeSection === 'action' ? 'active' : ''}`}
          onClick={() => setActiveSection('action')}
        >
          Action Plan
        </button>
      </div>

      <div className="container">
        <div className="content-section">
          <h2>{sections[activeSection].title}</h2>
          {sections[activeSection].content}
        </div>
      </div>

      <div className="footer">
        <p>© 2025 The Discipline Code. Transform your life through discipline, focus, and unwavering commitment to excellence.</p>
      </div>
    </main>
  );
}
