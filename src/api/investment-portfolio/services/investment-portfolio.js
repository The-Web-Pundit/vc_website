'use strict';

/**
 * investment-portfolio service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::investment-portfolio.investment-portfolio');
