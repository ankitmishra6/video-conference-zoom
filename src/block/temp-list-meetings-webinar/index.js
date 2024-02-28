import {registerBlockType} from "@wordpress/blocks";
import Edit from "./edit";

/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/#registering-a-block
 */
registerBlockType( 'vczapi/list-meetings', {
    /**
     * @see https://make.wordpress.org/core/2020/11/18/block-api-version-2/
     */
    apiVersion: 2,

    /**
     * @see ./edit.js
     */
    edit: Edit,
    example: {
        attributes: {
            preview : true,
            columns: 2,
            postsToShow: 2
        },
    },
} );