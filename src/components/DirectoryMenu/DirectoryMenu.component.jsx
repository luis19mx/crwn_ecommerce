import { useSelector } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectDirectorySections } from '../../store/directory/directory.selectors';
import MenuItem from '../MenuItem';
import { DirectoryMenuStyles } from './DirectoryMenu.styles';

const structuredSelectors = createStructuredSelector({
  sections: selectDirectorySections,
});

export default function Directory() {
  const { sections } = useSelector(structuredSelectors);
  return (
    <DirectoryMenuStyles>
      {sections.map(({ id, ...sectionDetails }) => (
        <MenuItem key={id} {...sectionDetails} />
      ))}
    </DirectoryMenuStyles>
  );
}
