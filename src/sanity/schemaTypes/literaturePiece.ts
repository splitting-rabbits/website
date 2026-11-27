import { defineArrayMember, defineField, defineType } from "sanity";

const categoryTitles: Record<string, string> = {
    poetry: "Poetry",
    articles: "Articles",
    magazines: "Magazines",
};

const layoutTitles: Record<string, string> = {
    poemText: "Text-only poem",
    poemArtwork: "Poem with artwork",
    poemPhoto: "Poem with a photo",
    article: "Article or magazine",
};

const richTextBlock = defineArrayMember({
    type: "block",
    styles: [
        { title: "Paragraph", value: "normal" },
        { title: "Heading", value: "h2" },
    ],
    marks: {
        decorators: [
            { title: "Bold", value: "strong" },
            { title: "Italic", value: "em" },
        ],
    },
});

const articleText = defineField({
    name: "text",
    title: "Text",
    type: "array",
    of: [richTextBlock],
});

const imageField = (
    name: string,
    title: string,
    group?: string,
    visibleLayouts?: string[],
    requiredLayouts?: string[],
) =>
    defineField({
        name,
        title,
        type: "image",
        group,
        hidden: visibleLayouts
            ? ({ document }) => !visibleLayouts.includes(String(document?.layout))
            : undefined,
        options: { hotspot: true },
        validation: (rule) =>
            rule.custom((value, context) =>
                !requiredLayouts?.includes(String(context.document?.layout)) || value
                    ? true
                    : `Upload ${title.toLowerCase()} for this page style.`,
            ),
        fields: [
            defineField({
                name: "alt",
                title: "Describe the image for accessibility",
                type: "string",
                description: "A short description of what readers see in the image.",
                validation: (rule) => rule.required(),
            }),
        ],
    });

export const literatureSection = defineType({
    name: "literatureSection",
    title: "Article section",
    type: "object",
    fields: [
        defineField({
            name: "heading",
            title: "Section heading",
            type: "string",
        }),
        articleText,
        imageField("image", "Image (optional)"),
        defineField({
            name: "caption",
            title: "Image caption",
            type: "string",
            hidden: ({ parent }) => !parent?.image,
        }),
        defineField({
            name: "imagePlacement",
            title: "Where should the image appear?",
            type: "string",
            options: {
                list: [
                    { title: "Above the text", value: "above" },
                    { title: "Below the text", value: "below" },
                    { title: "Left of the text", value: "left" },
                    { title: "Right of the text", value: "right" },
                ],
                layout: "radio",
            },
            initialValue: "above",
            hidden: ({ parent }) => !parent?.image,
        }),
    ],
    preview: {
        select: { title: "heading" },
        prepare: ({ title }) => ({ title: title || "Article section" }),
    },
});

export const literaturePiece = defineType({
    name: "literaturePiece",
    title: "Literature piece",
    type: "document",
    groups: [
        { name: "details", title: "Details", default: true },
        { name: "design", title: "Design" },
        { name: "writing", title: "Writing" },
    ],
    initialValue: {
        category: "poetry",
        layout: "poemText",
        theme: "butter",
        author: "Jordan Storm",
    },
    orderings: [
        {
            title: "Display order",
            name: "displayOrderAsc",
            by: [
                { field: "displayOrder", direction: "asc" },
                { field: "title", direction: "asc" },
            ],
        },
        {
            title: "Title",
            name: "titleAsc",
            by: [{ field: "title", direction: "asc" }],
        },
    ],
    fields: [
        defineField({
            name: "title",
            title: "Title",
            type: "string",
            group: "details",
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: "slug",
            title: "Page address",
            type: "slug",
            group: "details",
            description: "Select Generate after entering the title. This creates the web address.",
            options: { source: "title", maxLength: 96 },
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: "author",
            title: "Author",
            type: "string",
            group: "details",
        }),
        defineField({
            name: "publishedAt",
            title: "Publication date",
            type: "date",
            group: "details",
        }),
        defineField({
            name: "displayOrder",
            title: "Position in the list",
            type: "number",
            group: "details",
            description: "Smaller numbers appear first within the selected section.",
            validation: (rule) => rule.integer().min(0),
        }),
        defineField({
            name: "category",
            title: "Section",
            type: "string",
            group: "details",
            options: {
                list: [
                    { title: "Poetry", value: "poetry" },
                    { title: "Articles", value: "articles" },
                    { title: "Magazines", value: "magazines" },
                ],
                layout: "radio",
            },
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: "layout",
            title: "Page style",
            type: "string",
            group: "details",
            description: "Choose the closest style. The writing and image fields will adjust to match.",
            options: {
                list: [
                    { title: "Poem - text only", value: "poemText" },
                    { title: "Poem - artwork with text", value: "poemArtwork" },
                    { title: "Poem - photo with text", value: "poemPhoto" },
                    { title: "Article or magazine - sections and images", value: "article" },
                ],
                layout: "radio",
            },
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: "theme",
            title: "Page background",
            type: "string",
            group: "design",
            description: "Choose one of the background colors used in the Literature designs.",
            options: {
                list: [
                    { title: "Butter yellow (#FFF1C7)", value: "butter" },
                    { title: "Soft peach (#FFE1C4)", value: "peach" },
                    { title: "Fresh green (#B3DD4D)", value: "lime" },
                    { title: "Soft white (#EDEDED)", value: "paper" },
                    { title: "Blush pink (#DFC0C6)", value: "blush" },
                ],
                layout: "radio",
            },
            initialValue: "butter",
            validation: (rule) => rule.required(),
        }),
        imageField(
            "artwork",
            "Artwork image",
            "design",
            ["poemArtwork"],
            ["poemArtwork"],
        ),
        defineField({
            name: "overlayText",
            title: "Words shown over the artwork",
            type: "text",
            rows: 8,
            group: "design",
            description: "Optional. Use line breaks to control how the words appear.",
            hidden: ({ document }) =>
                document?.layout !== "poemArtwork" && document?.layout !== "poemPhoto",
        }),
        defineField({
            name: "overlayAlignment",
            title: "Words alignment",
            type: "string",
            group: "design",
            options: {
                list: [
                    { title: "Left", value: "left" },
                    { title: "Center", value: "center" },
                    { title: "Right", value: "right" },
                ],
                layout: "radio",
            },
            initialValue: "center",
            hidden: ({ document }) =>
                document?.layout !== "poemArtwork" && document?.layout !== "poemPhoto",
        }),
        defineField({
            name: "overlayPosition",
            title: "Words position",
            type: "string",
            group: "design",
            options: {
                list: [
                    { title: "Near the top", value: "top" },
                    { title: "In the middle", value: "center" },
                    { title: "Near the bottom", value: "bottom" },
                ],
                layout: "radio",
            },
            initialValue: "center",
            hidden: ({ document }) =>
                document?.layout !== "poemArtwork" && document?.layout !== "poemPhoto",
        }),
        defineField({
            name: "overlayTextColor",
            title: "Words color",
            type: "string",
            group: "design",
            options: {
                list: [
                    { title: "Black", value: "black" },
                    { title: "White", value: "white" },
                    { title: "Blue", value: "blue" },
                    { title: "Orange", value: "orange" },
                ],
                layout: "radio",
            },
            initialValue: "white",
            hidden: ({ document }) =>
                document?.layout !== "poemArtwork" && document?.layout !== "poemPhoto",
        }),
        imageField(
            "featureImage",
            "Main photo",
            "design",
            ["poemPhoto", "article"],
            ["poemPhoto"],
        ),
        defineField({
            name: "poemText",
            title: "Poem text",
            type: "text",
            rows: 18,
            group: "writing",
            description: "Enter the complete poem. Line breaks are preserved.",
            hidden: ({ document }) =>
                document?.layout === "article",
            validation: (rule) =>
                rule.custom((value, context) =>
                    context.document?.layout === "article" ||
                    (typeof value === "string" && value.trim().length > 0)
                        ? true
                        : "Add the poem text before publishing.",
                ),
        }),
        defineField({
            name: "poemAlignment",
            title: "Poem alignment",
            type: "string",
            group: "design",
            options: {
                list: [
                    { title: "Left", value: "left" },
                    { title: "Centered", value: "center" },
                    { title: "Right", value: "right" },
                ],
                layout: "radio",
            },
            initialValue: "center",
            hidden: ({ document }) => document?.layout === "article",
        }),
        defineField({
            name: "subtitle",
            title: "Subtitle",
            type: "string",
            group: "writing",
        }),
        defineField({
            name: "articleSections",
            title: "Article sections",
            type: "array",
            of: [defineArrayMember({ type: "literatureSection" })],
            group: "writing",
            description: "Add sections in the order they should appear. Each section can include text, an image, or both.",
            hidden: ({ document }) => document?.layout !== "article",
            validation: (rule) =>
                rule.custom((value, context) =>
                    context.document?.layout !== "article" ||
                    (Array.isArray(value) && value.length > 0)
                        ? true
                        : "Add at least one article section before publishing.",
                ),
        }),
    ],
    preview: {
        select: {
            title: "title",
            category: "category",
            layout: "layout",
        },
        prepare: ({ title, category, layout }) => ({
            title: title || "Untitled literature piece",
            subtitle: [
                category ? categoryTitles[category] || category : undefined,
                layout ? layoutTitles[layout] || layout : undefined,
            ]
                .filter(Boolean)
                .join(" · "),
        }),
    },
});
