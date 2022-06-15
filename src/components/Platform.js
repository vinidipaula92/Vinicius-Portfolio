import { SiNotion, SiZoom } from 'react-icons/si';
import '../css/Platform.css';

export default function Platform() {
  return (
    <div className="container">
      <div>
        <div className="tec-container">
          <span>
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/slack/slack-original.svg"
              alt="slack"
              className="tech-icon"
            />
            Slack
          </span>
          <span>
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/trello/trello-plain.svg"
              alt="trello"
              className="tech-icon"
            />
            Trello
          </span>
          <span>
            <SiZoom className="icon-react zoom" />
            Zoom Meeting
          </span>
          <span>
            <SiNotion className="icon-react" />
            Notion
          </span>
        </div>
      </div>
    </div>
  );
}
