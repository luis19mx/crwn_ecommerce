import { useSelector } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectDirectorySections } from '../../redux/directory/directory.selectors';
import MenuItem from '../MenuItem';
import './directory-menu.styles.scss';

const structuredSelectors = createStructuredSelector({
  sections: selectDirectorySections,
});

export default function Directory() {
  const { sections } = useSelector(structuredSelectors);
  return (
    <div className="directory-menu">
      {sections.map(({ id, ...sectionDetails }) => (
        <MenuItem key={id} {...sectionDetails} />
      ))}
    </div>
  );
}
