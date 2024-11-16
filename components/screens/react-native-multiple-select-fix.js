// react-native-multiple-select-fix.js
import { ViewPropTypes } from 'deprecated-react-native-prop-types';
import MultiSelect from 'react-native-multiple-select';

// Temporary fix: Replace ViewPropTypes usage in MultiSelect
MultiSelect.propTypes = {
	...MultiSelect.propTypes,
	style: ViewPropTypes.style,
};

export default MultiSelect;
