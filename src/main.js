const createSiteMenuTemplate = ()=>{
  const createMenuItemTemplate = (idMenuItem, text, advancedClass = ``, active = false)=>{
    return (
      `<input
      type="radio"
      name="control"
      id="${idMenuItem}"
      class="control__input visually-hidden"
      ${active ? `checked` : ``}/>
      <label for="${idMenuItem}" class="control__label ${advancedClass}"
      >${text}</label>`
    );
  };
  return (
    `<section class="control__btn-wrap">
  ${createMenuItemTemplate(`control__new-task`, `+ ADD NEW TASK`, `control__label--new-task`, true)}
  ${createMenuItemTemplate(`control__task`, `TASK`, ``, true)}
  ${createMenuItemTemplate(`control__statistic",'STATISTICS`)}
    </section>`
  );
};

const createfilterSiteTemplate = ()=>{
  const createFilterItemTemplate = (idFilter, atribute, textFilter, count, countClass)=>{
    return (
      `<input
    type="radio"
    id="${idFilter}"
    class="filter__input visually-hidden"
    name="filter"
    ${atribute ? atribute : ``}/>
      <label for="${idFilter}" class="filter__label">${textFilter}
       <span class="${countClass}">${count}</span>
      </label>`);
  };

  return (
    `<section class="main__filter filter container">
    ${createFilterItemTemplate(`filter__all`, `checked`, `All`, 13, `filter__all-count`)};
    ${createFilterItemTemplate(`filter__overdue`, `disabled`, `Overdue`, 0, `filter__overdue-count`)};
    ${createFilterItemTemplate(`filter__today`, `disabled`, `Today`, 0, `filter__today-count`)};
    ${createFilterItemTemplate(`filter__favorites`, ``, `Favorites`, 1, `filter__favorites-count`)};
    ${createFilterItemTemplate(`filter__repeating`, ``, `Repeating`, 1, `filter__repeating-count`)};
    ${createFilterItemTemplate(`filter__archive`, ``, `Archive`, 115, `filter__archive-count`)};
      </section>`);
}
const createBoardSiteTemplate = ()=>{
  const createSortList = ()=>{
    const createSortItem = (sortLink,sortType,sortText) =>
      `<a href="${sortLink}" class="board__filter" data-sort-type="${sortType}">${sortText}</a>`;

    return (
      ` <div class="board__filter-list">
      ${createSortItem(`#`, `default`, `SORT BY DEFAULT`)}
      ${createSortItem(`#`, `date-up`, `SORT BY DATE up`)}
      ${createSortItem(`#`, `date-down`, `SORT BY DATE down`)}
       </div>`);
  };

  const createTaskItem = (color,text,dateTime)=>{
    return (
      `<article class="card card--${color}">
      <div class="card__form">
        <div class="card__inner">
          <div class="card__control">
            <button type="button" class="card__btn card__btn--edit">
              edit
            </button>
            <button type="button" class="card__btn card__btn--archive">
              archive
            </button>
            <button
              type="button"
              class="card__btn card__btn--favorites card__btn--disabled"
            >
              favorites
            </button>
          </div>

          <div class="card__color-bar">
            <svg class="card__color-bar-wave" width="100%" height="10">
              <use xlink:href="#wave"></use>
            </svg>
          </div>

          <div class="card__textarea-wrap">
            <p class="card__text">${text}</p>
          </div>

          <div class="card__settings">
            <div class="card__details">
              <div class="card__dates">
                <div class="card__date-deadline">
                  <p class="card__input-deadline-wrap">
                    <span class="card__date">${date}</span>
                    <span class="card__time">${time}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>`
    );
  };
  return `<section class="board container">
    ${createSortList()}

    <div class="board__tasks">
      

      <article class="card card--blue">
        <div class="card__form">
          <div class="card__inner">
            <div class="card__control">
              <button type="button" class="card__btn card__btn--edit">
                edit
              </button>
              <button type="button" class="card__btn card__btn--archive">
                archive
              </button>
              <button
                type="button"
                class="card__btn card__btn--favorites card__btn--disabled"
              >
                favorites
              </button>
            </div>

            <div class="card__color-bar">
              <svg class="card__color-bar-wave" width="100%" height="10">
                <use xlink:href="#wave"></use>
              </svg>
            </div>

            <div class="card__textarea-wrap">
              <p class="card__text">Example task with custom color.</p>
            </div>

            <div class="card__settings">
              <div class="card__details">
                <div class="card__dates">
                  <div class="card__date-deadline">
                    <p class="card__input-deadline-wrap">
                      <span class="card__date">23 September</span>
                      <span class="card__time">16:15</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>

      <article class="card card--yellow">
        <div class="card__form">
          <div class="card__inner">
            <div class="card__control">
              <button type="button" class="card__btn card__btn--edit">
                edit
              </button>
              <button type="button" class="card__btn card__btn--archive">
                archive
              </button>
              <button
                type="button"
                class="card__btn card__btn--favorites card__btn--disabled"
              >
                favorites
              </button>
            </div>

            <div class="card__color-bar">
              <svg class="card__color-bar-wave" width="100%" height="10">
                <use xlink:href="#wave"></use>
              </svg>
            </div>

            <div class="card__textarea-wrap">
              <p class="card__text">Example task with custom color and without date.</p>
            </div>

            <div class="card__settings">
              <div class="card__details">
              </div>
            </div>
          </div>
        </div>
      </article>

      <article class="card card--green">
        <div class="card__form">
          <div class="card__inner">
            <div class="card__control">
              <button type="button" class="card__btn card__btn--edit">
                edit
              </button>
              <button type="button" class="card__btn card__btn--archive">
                archive
              </button>
              <button
                type="button"
                class="card__btn card__btn--favorites card__btn--disabled"
              >
                favorites
              </button>
            </div>

            <div class="card__color-bar">
              <svg class="card__color-bar-wave" width="100%" height="10">
                <use xlink:href="#wave"></use>
              </svg>
            </div>

            <div class="card__textarea-wrap">
              <p class="card__text">Example task with custom color.</p>
            </div>

            <div class="card__settings">
              <div class="card__details">
                <div class="card__dates">
                  <div class="card__date-deadline">
                    <p class="card__input-deadline-wrap">
                      <span class="card__date">23 September</span>
                      <span class="card__time">16:15</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>

      <article class="card card--black">
        <div class="card__form">
          <div class="card__inner">
            <div class="card__control">
              <button type="button" class="card__btn card__btn--edit">
                edit
              </button>
              <button type="button" class="card__btn card__btn--archive">
                archive
              </button>
              <button
                type="button"
                class="card__btn card__btn--favorites card__btn--disabled"
              >
                favorites
              </button>
            </div>

            <div class="card__color-bar">
              <svg class="card__color-bar-wave" width="100%" height="10">
                <use xlink:href="#wave"></use>
              </svg>
            </div>

            <div class="card__textarea-wrap">
              <p class="card__text">Example task without date.</p>
            </div>

            <div class="card__settings">
              <div class="card__details"></div>
            </div>
          </div>
        </div>
      </article>

      <article class="card card--pink card--repeat">
        <div class="card__form">
          <div class="card__inner">
            <div class="card__control">
              <button type="button" class="card__btn card__btn--edit">
                edit
              </button>
              <button type="button" class="card__btn card__btn--archive">
                archive
              </button>
              <button
                type="button"
                class="card__btn card__btn--favorites card__btn--disabled"
              >
                favorites
              </button>
            </div>

            <div class="card__color-bar">
              <svg class="card__color-bar-wave" width="100%" height="10">
                <use xlink:href="#wave"></use>
              </svg>
            </div>

            <div class="card__textarea-wrap">
              <p class="card__text">It is example of repeating task. It marks by wave.</p>
            </div>

            <div class="card__settings">
              <div class="card__details">
                <div class="card__dates">
                  <div class="card__date-deadline">
                    <p class="card__input-deadline-wrap">
                      <span class="card__date">23 September</span>
                      <span class="card__time">16:15</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>

      <article class="card card--red card--deadline">
        <div class="card__form">
          <div class="card__inner">
            <div class="card__control">
              <button type="button" class="card__btn card__btn--edit">
                edit
              </button>
              <button type="button" class="card__btn card__btn--archive">
                archive
              </button>
              <button
                type="button"
                class="card__btn card__btn--favorites card__btn--disabled"
              >
                favorites
              </button>
            </div>

            <div class="card__color-bar">
              <svg class="card__color-bar-wave" width="100%" height="10">
                <use xlink:href="#wave"></use>
              </svg>
            </div>

            <div class="card__textarea-wrap">
              <p class="card__text">This is task with missing deadline.</p>
            </div>

            <div class="card__settings">
              <div class="card__details"></div>
            </div>
          </div>
        </div>
      </article>

      <article class="card card--black card--deadline">
        <div class="card__form">
          <div class="card__inner">
            <div class="card__control">
              <button type="button" class="card__btn card__btn--edit">
                edit
              </button>
              <button type="button" class="card__btn card__btn--archive">
                archive
              </button>
              <button
                type="button"
                class="card__btn card__btn--favorites card__btn--disabled"
              >
                favorites
              </button>
            </div>

            <div class="card__color-bar">
              <svg class="card__color-bar-wave" width="100%" height="10">
                <use xlink:href="#wave"></use>
              </svg>
            </div>

            <div class="card__textarea-wrap">
              <p class="card__text">This is task with missing deadline. Deadline always marked by red line.</p>
            </div>

            <div class="card__settings">
              <div class="card__details">
                <div class="card__dates">
                  <div class="card__date-deadline">
                    <p class="card__input-deadline-wrap">
                      <span class="card__date">23 September</span>
                      <span class="card__time">16:15</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>

    <button class="load-more" type="button">load more</button>
  </section>`
}

const render = (container,place,template) => {
  container.insertAdjacentHTML(place, template ) ;
}

const main = document.querySelector(`.main`);
const menuContainer = main.querySelector(`.main__control`);
render(menuContainer,`beforeEnd`,createSiteMenuTemplate());
render(main,`beforeEnd`,createfilterSiteTemplate());
render(main,`beforeEnd`,createBoardSiteTemplate());