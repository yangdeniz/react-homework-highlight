import HighlightedArticle from '../article/highlighted-article';
import HighlightedVideo from '../video/highlighted-video';

function List(props) {
  return props.list.map(item => {
    switch (item.type) {
      case 'video':
        return (
          <HighlightedVideo key={props.list.indexOf(item)} {...item} />
        );

      case 'article':
        return (
          <HighlightedArticle key={props.list.indexOf(item)} {...item} />
        );

      default:
        return null;
    }
  });
}

export default List;