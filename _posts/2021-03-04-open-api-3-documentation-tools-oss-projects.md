---
title: Open API 3 documentation tools for OSS projects
categories:
  - Open API
header:
  overlay_color: "#000"
  overlay_filter: "0.5"
  overlay_image: assets/images/exchange.jpg
  teaser: assets/images/exchange.jpg
excerpt: There are a plethora of systems that you can use but many carry a cost and, for open-source software, that's often a deal-breaker
layout: splash
classes: wide
---

There are a few excellent options to choose from, each with individual strengths and features. Whatever your budget, I'd say that there's no such thing as a perfect OAS3 (Open API 3 specification) documentation tool. You need to decide what's most important to you and accept the compromises you must make.

Note that I'm only considering Open API **3** tools here so will not cover Open API 2 tools like *Dapperdox* and *Apiary*.
{: .notice--info}

# What's free?

| Tool       | OAS editor | Try it out | Layout                      | Self-host or custom domain?      | Automated code outputs | Expandable schemas? | Git integration                 | Collaborative?    |
| ---------- | ----------------- | ---------- | --------------------------- | -------------------------------- | ---------------------- | ------------------- | ------------------------------- | ---------------- |
| [ReadMe](https://readme.com/)      | No                | Yes         | Three-column                | Neither                        | 5                      | No                 | OAS, markdown and digital file synchronisation                               | Up to 5 people
| [Redoc](https://github.com/Redocly/redoc)      | No                | No         | Three-column                | Self-host                        | 0                      | Yes                 | No                              | No               |
| [Speca](https://speca.io/)      | Yes               | No         | Three-column                | Custom domain (not on the free tier) | 0                      | Yes                 | OAS synchronisation | Not on the free tier |
| [Swagger UI](https://swagger.io/tools/swagger-ui/) | Yes           | Yes        | One column, expandable | Self-host                        | 1                      | Yes                 | No                              | No               |
| [SwaggerHub](https://app.swaggerhub.com/) | Yes           | Yes        | One column, expandable | Either (not on the free tier) | 1                      | Yes                 | OAS synchronisation                             | Not on the free tier |

## Key

- **OAS editor** - includes its own Open API editing tool
- **Try it out** - allows users to test API calls within the tool?
- **Layout** - does this adopt the [Stripe API style](https://stripe.com/docs/api) three-column layout or the [Swagger style](https://petstore.swagger.io/) one column expandable layout
- **Self-host or custom domain?** - can you deploy this on your servers (*Self-host*) or point the hosted service to your domain (*Custom domain*)
- **Automated code outputs** - how many types of output can the tool generate for API requests. Note that this does not include manually-generated code injected into the Open API specification (such as Redoc's, admittedly excellent, *x-codeSamples* extension)
- **Expandable schemas** - JSON structures can get complicated. Does the tool allow you to collapse and expand the schemas so you can see as much detail as you wish?
- **Git integration** - what is the nature of any integration with Git repositories
- **Collaborative?** - does this have features to allow more than one person to work on the same specification concurrently?


# What if you are willing to 'splash the cash'

The commercial realm often offers far more than the free options: code generation, extended documentation tools, integration with Git repositories, version control, advanced Open API editing, multi-user collaboration, mocking servers and so on. The standouts for me being:

- **[Stoplight](https://stoplight.io/welcome)** - for its unparalleled Open API editor and intelligent integration with Git repositories
- **[SwaggerHub](https://app.swaggerhub.com/)** - for its integrated tooling (SmartBear/SwaggerHub is Open API central, after all)
- **[ReadMe](https://readme.com/)** - for its complete, consistent and attractive documentation suite.

| Tool            | OAS editor | Try it out | Layout                 | Cost (from) | Self-host or custom domain?      | Automated code outputs | Expandable schemas? | Git integration                               | Collaborative    | Other documentation tools? |
| --------------- | ----------------- | ---------- | ---------------------- | ------------ | -------------------------------- | ---------------------- | ------------------- | --------------------------------------------- | ---------------- | -------------------------- |
| [Apimatic](https://www.apimatic.io/)        | Yes               | Yes        | Three-column           | $9.90/month  | Either (not at $9.90 tier)       | 11                     | Yes                 | Can generate SDKs                             | Yes              | Comprehensive              |
| [DeveloperHub.io](https://developerhub.io/) | No                | No         | Three-column           | $39/month    | Custom domain                    | 6                      | Yes                 | No                                            | Yes              | Comprehensive              |
| [ReadMe](https://readme.com/)       | No               | Yes        | Three-column           | Free (for OSS)    | Custom domain (not on the free tier)                    | 5                      | No                  | OAS, markdown and digital file synchonisation | Yes              | Comprehensive              |
| [Redocly](https://redoc.ly/)        | No                | Yes        | Three-column           | $69/month    | Custom domain (not at $69 tier)  | 0                      | Yes                 | OAS, markdown and digital file synchronisation | Yes              | Some                       |
| [Speca](https://speca.io/)           | Yes               | No         | Three-column           | Free         | Custom domain (not on the free tier) | 0                      | Yes                 | OAS synchronisation                           | Not on free tier | None                       |
| [Stoplight](https://stoplight.io/)       | Yes               | Yes        | Three-column           | $99/month    | Custom domain                    | 33                     | Yes             | OAS, markdown and digital file synchonisation | Yes              | Some                       |
| [SwaggerHub](https://app.swaggerhub.com/)      | Yes           | Yes        | One column, expandable | Free         | Either (not on the free tier)        | 1                      | Yes                 | OAS synchronisation                                            | Not on the free tier | None                       |

## Key

As above, plus:

- **Cost (from)** - this is the cost for at least one *published* API. Quite a few of these commercial tools will let you develop an Open API specification for free but you need to pay if you want to allow public access to it
- **Other documentation tools** - this article is specifically looking at these systems as documentation tools. Outside of the Open API specification does the system provide other documentation tools?
