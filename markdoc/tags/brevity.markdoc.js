import { Tag } from '@markdoc/markdoc';
import { BrevityGroup, Brevity } from '../../components/Brevity';

export const brevitygroup = {
  render: BrevityGroup,
  attributes: {},
  transform(node, config) {
    const labels = node
      .transformChildren(config)
      .filter((child) => child && child.name === 'Tab')
      .map((brevity) => (typeof brevity === 'object' ? brevity.attributes.label : null));

    return new Tag(this.render, { labels }, node.transformChildren(config));
  }
};

export const brevity = {
    render: Brevity,
    attributes: {
      label: {
        type: String
      }
    }
  };

/** @type {import('@markdoc/markdoc').Config} */
const config = {
  tags: {
    brevitygroup,
    brevity
  }
};