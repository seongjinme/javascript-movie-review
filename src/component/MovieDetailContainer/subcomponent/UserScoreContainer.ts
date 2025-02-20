import { CONFIG } from '../../../constant/config';
import IN_APP_MESSAGE from '../../../constant/inAppMessage';
import { UserScoreParams, UserScoreType } from '../../../interface/MovieInterface';

interface UserScoreContainerParams {
  movieId: number;
  userScore: UserScoreType | null;
  updateUserScore: ({ movieId, userScore }: UserScoreParams) => void;
}

class UserScoreContainer {
  private movieId;
  private userScore;
  private updateUserScore;
  private container;
  private userScoreStars;
  private userScoreStarsContainer;
  private userScoreText;
  private userScoreDescription;

  constructor({ movieId, userScore, updateUserScore }: UserScoreContainerParams) {
    this.movieId = movieId;
    this.userScore = userScore;
    this.updateUserScore = updateUserScore;

    this.container = document.createElement('div');
    this.container.classList.add('user-score-container');

    this.userScoreStars = this.createUserScoreStars();
    this.userScoreStarsContainer = this.createUserScoreStarsContainer();
    this.userScoreText = this.createUserScoreText();
    this.userScoreDescription = this.createUserScoreDescription();

    this.initContainer();
  }

  setUserScore(userScore: UserScoreType) {
    this.userScore = userScore;
  }

  render() {
    return this.container;
  }

  private initContainer() {
    const userScoreTitle = document.createElement('span');
    userScoreTitle.classList.add('user-score-title');
    userScoreTitle.textContent = '내 별점';

    this.updateUserScoreStatus(this.userScore);

    this.container.append(userScoreTitle, this.userScoreStarsContainer, this.userScoreText, this.userScoreDescription);
  }

  private updateUserScoreStatus(userScore: UserScoreType | null) {
    this.updateUserScoreStars(userScore);
    this.updateUserScoreText(userScore);
    this.updateUserScoreDescription(userScore);
  }

  private updateUserScoreStars(userScore: UserScoreType | null) {
    const userScoreArray = this.getUserScoreArray(userScore);
    this.userScoreStars.forEach((star, index) => {
      if (userScoreArray[index]) star.classList.add('filled');
      else star.classList.remove('filled');
    });
  }

  private updateUserScoreText(userScore: UserScoreType | null) {
    this.userScoreText.textContent = userScore?.toString() || '0';
  }

  private updateUserScoreDescription(userScore: UserScoreType | null) {
    if (userScore !== null && userScore in CONFIG.userScore) {
      this.userScoreDescription.textContent = CONFIG.userScore[userScore] ?? IN_APP_MESSAGE.emptyUserScore;
      return;
    }
    this.userScoreDescription.textContent = IN_APP_MESSAGE.emptyUserScore;
  }

  private getUserScoreArray(userScore: UserScoreType | null) {
    return Array.from({ length: Object.keys(CONFIG.userScore).length }, (_, index) => {
      if (userScore && index < Math.floor(userScore / 2)) {
        return true;
      }
      return false;
    });
  }

  private getUserScoreByStarIndex(index: number) {
    const userScore = (index + 1) * 2;
    if (userScore in CONFIG.userScore) {
      return userScore as keyof typeof CONFIG.userScore;
    }
    return null;
  }

  private addEventUserScoreStars(star: HTMLDivElement, index: number) {
    const userScore = this.getUserScoreByStarIndex(index);
    if (userScore) {
      star.addEventListener('click', () => this.handleClickUserScoreStar(userScore));
      star.addEventListener('mouseenter', () => this.updateUserScoreStatus(userScore));
      star.addEventListener('mouseleave', () => this.updateUserScoreStatus(this.userScore));
    }
  }

  private createUserScoreStars() {
    return Array.from({ length: Object.keys(CONFIG.userScore).length }, (_, index) => {
      const scoreForStar = this.getUserScoreByStarIndex(index);
      const star = document.createElement('div');
      star.classList.add('user-score-star');
      star.id = `user-score-${scoreForStar}`;
      this.addEventUserScoreStars(star, index);
      return star;
    });
  }

  private createUserScoreStarsContainer() {
    const userScoreStarsContainer = document.createElement('div');
    userScoreStarsContainer.classList.add('star-icons');
    userScoreStarsContainer.append(...this.userScoreStars);
    return userScoreStarsContainer;
  }

  private createUserScoreText() {
    const userScoreText = document.createElement('span');
    userScoreText.classList.add('user-score');
    return userScoreText;
  }

  private createUserScoreDescription() {
    const userScoreDescription = document.createElement('span');
    userScoreDescription.classList.add('user-score-description');
    return userScoreDescription;
  }

  private handleClickUserScoreStar(userScore: UserScoreType) {
    this.setUserScore(userScore);
    this.updateUserScoreStatus(this.userScore);
    this.updateUserScore({ movieId: this.movieId, userScore });
  }
}

export default UserScoreContainer;
