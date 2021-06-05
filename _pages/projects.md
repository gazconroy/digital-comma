---
title: Recent projects
permalink: /projects.html
author_profile: false
header:
  overlay_color: "#000"
  overlay_filter: "0.5"
  overlay_image: assets/images/projects.jpg
excerpt: Examples of Digital Comma's recent work
classes: wide
row1:
- image_path: assets/images/shortify.png
  title: "Shortify"
  url: "https://petstore.swagger.io/?url=https://raw.githubusercontent.com/sprakash57/shortify/master/server/oas/openapi.yaml"
  excerpt: "Shortify converts a long URL into an eight-character 'shorty'. I generated their Open API specification in Swagger UI."
  btn_label: "See the Open API specification 'document'"
  btn_class: "btn--inverse"
- image_path: assets/images/lemmy.png
  title: "LemmyNet"
  url: "https://github.com/LemmyNet/joinlemmy-site/tree/main/src/assets/scripts"
  excerpt: "Lemmy is an open source link aggregator (similar to *Reddit*). I generated an AsyncAPI specification for their WebSocket interface"
  btn_label: "On GitHub..."
  btn_class: "btn--inverse"
- image_path: assets/images/opa.png
  title: "Open Policy Agent (OPA)"
  url: "https://github.com/open-policy-agent/contrib/tree/main/open_api"
  excerpt: "OPA provides fine-grained policy-based control for cloud-native environments. I generated their Open API specification (deployed using Redoc)."
  btn_label: "On GitHub..."
  btn_class: "btn--inverse"
row2:
- image_path: assets/images/unleash.png
  title: "Unleash"
  url: "https://github.com/Unleash/unleash/tree/master/websitev2/docs/api/oas"
  excerpt: "Unleash is one of the leading software feature flag systems. I generated their Open API specification (deployed using a combination of Redoc, Swagger UI and Postman) and also worked on some of their marketing materials."
  btn_label: "On GitHub..."
  btn_class: "btn--inverse"
---

# Recent projects

{% include feature_row id="row1" %}
{% include feature_row id="row2" %}