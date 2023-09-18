---
title: Verbosity test
description: Testing a verbosity component in markdoc
cover: /images/martin-sanchez-gD3dUQpMlvk-unsplash.jpg
---

{% tabs %}

## Lorem Ipsum

{% tab label="s" %}
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 

{% /tab %}

{% tab label="sm" %}
Eu facilisis sed odio morbi quis commodo. Mus mauris vitae ultricies leo integer malesuada nunc vel risus. Egestas purus viverra accumsan in nisl nisi scelerisque eu ultrices. Ullamcorper eget nulla facilisi etiam dignissim diam. Sed nisi lacus sed viverra tellus in. Nec sagittis aliquam malesuada bibendum arcu vitae. Eget lorem dolor sed viverra ipsum nunc aliquet bibendum enim. Senectus et netus et malesuada fames ac turpis. Et netus et malesuada fames ac turpis. Eget felis eget nunc lobortis mattis aliquam faucibus purus in. Gravida cum sociis natoque penatibus. Integer vitae justo eget magna fermentum iaculis. At tellus at urna condimentum mattis pellentesque. Etiam erat velit scelerisque in dictum. Adipiscing diam donec adipiscing tristique risus nec feugiat in fermentum. Metus vulputate eu scelerisque felis. Posuere morbi leo urna molestie at elementum eu facilisis sed. Viverra accumsan in nisl nisi scelerisque eu ultrices vitae. Ut tellus elementum sagittis vitae et.
{% /tab %}

{% tab label="s" %}
```
labels = ['A', 'B', 'A', 'C'];

// Remove duplicates to get unique labels
uniqueLabels = RemoveDuplicates(labels);

// Initialize an empty result array
result = [];

// Iterate over the unique labels and perform an action
ForEach(label in uniqueLabels) {
  // Filter the original array to get elements with the current label
  elementsWithLabel = FilterElements(labels, label);

  // Perform an action or transformation (e.g., count elements)
  actionResult = PerformAction(elementsWithLabel);

  // Add the action result to the result array
  result.push(actionResult);
}

```
{% /tab %}

{% tab label="sml" %}
Elit pellentesque habitant morbi tristique senectus et netus. Gravida arcu ac tortor dignissim convallis aenean. Molestie ac feugiat sed lectus. Nec dui nunc mattis enim ut tellus. Mattis pellentesque id nibh tortor id. Malesuada fames ac turpis egestas integer. Volutpat blandit aliquam etiam erat velit. Nunc sed id semper risus in hendrerit gravida. Neque sodales ut etiam sit amet nisl. Pharetra et ultrices neque ornare aenean euismod elementum nisi quis. Amet dictum sit amet justo donec enim diam. Id aliquet lectus proin nibh nisl condimentum id venenatis a. Vestibulum mattis ullamcorper velit sed ullamcorper morbi. Nec feugiat in fermentum posuere.
{% /tab %}

{% /tabs %}


