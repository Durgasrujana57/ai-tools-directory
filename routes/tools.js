const express = require('express');
const router = express.Router();
const { db } = require('../firebase');

// Dashboard - list categories
router.get('/dashboard', async (req, res) => {
  try {
    const categoriesSnapshot = await db.collection('categories').get();
    const categories = categoriesSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    res.render('dashboard', { categories });
  } catch (err) {
    res.status(500).send('Server error');
  }
});

// Tools under a category
router.get('/category/:slug', async (req, res) => {
  const slug = req.params.slug;
  try {
    const categoryDoc = await db.collection('categories').doc(slug).get();
    if (!categoryDoc.exists) return res.status(404).send('Category not found');

    const category = { id: categoryDoc.id, ...categoryDoc.data() };
    const toolsSnapshot = await db.collection('tools').where('category', '==', slug).get();
    const tools = toolsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

    res.render('tools', { category, tools });
  } catch (err) {
    res.status(500).send('Error loading tools');
  }
});

// Tool detail view
router.get('/tools/:id', async (req, res) => {
  try {
    const doc = await db.collection('toolsDetails').doc(req.params.id).get();
    if (!doc.exists) return res.status(404).send('Tool not found');
    res.render('tool-details', { tool: doc.data() });
  } catch {
    res.status(500).send('Error loading tool');
  }
});

module.exports = router;
