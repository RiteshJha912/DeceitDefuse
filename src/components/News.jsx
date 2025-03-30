import { useState, useEffect } from 'react';
import { 
  FaNewspaper, 
  FaClock, 
  FaGlobe, 
  FaSearch, 
  FaFilter,
  FaSpinner,
  FaShieldAlt,
  FaImage,
  FaBookmark,
  FaShare,
  FaExclamationTriangle,
  FaRegBookmark
} from 'react-icons/fa';
import '../styles/News.css';

const News = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSource, setSelectedSource] = useState('all');
  const [imageErrors, setImageErrors] = useState({});
  const [bookmarkedArticles, setBookmarkedArticles] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showShareModal, setShowShareModal] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState(null);

  const API_KEY = '84941dd1ddec4158a1237e9d856ec371' // Replace with your actual API key
  const API_URL = `https://newsapi.org/v2/everything?q=(cybersecurity OR "cyber security" OR "cyber attack" OR "data breach" OR "ransomware" OR "malware" OR "phishing" OR "hackers" OR "cybercrime" OR "cyber threat")&language=en&sortBy=publishedAt&apiKey=${API_KEY}`

  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = async () => {
    try {
      setLoading(true);
      const response = await fetch(API_URL);
      const data = await response.json();
      
      if (data.status === 'ok') {
        // Additional filtering to ensure cybersecurity relevance
        const cyberNews = data.articles.filter(article => {
          const title = article.title.toLowerCase();
          const description = article.description?.toLowerCase() || '';
          const content = article.content?.toLowerCase() || '';
          
          const cyberKeywords = [
            'cybersecurity', 'cyber security', 'cyber attack', 'data breach',
            'ransomware', 'malware', 'phishing', 'hackers', 'cybercrime',
            'cyber threat', 'firewall', 'encryption', 'vulnerability',
            'exploit', 'breach', 'hack', 'security', 'cyber'
          ];

          return cyberKeywords.some(keyword => 
            title.includes(keyword) || 
            description.includes(keyword) || 
            content.includes(keyword)
          );
        });

        setNews(cyberNews);
      } else {
        setError('Failed to fetch cybersecurity news');
      }
    } catch (err) {
      setError('Error fetching cybersecurity news');
      console.error('Error:', err);
    } finally {
      setLoading(false);
    }
  };

  const filteredNews = news.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.description?.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSource = selectedSource === 'all' || article.source.name.toLowerCase().includes(selectedSource);
    
    // Add category filtering
    const matchesCategory = selectedCategory === 'all' || 
      (selectedCategory === 'ransomware' && (article.title.toLowerCase().includes('ransomware') || 
        article.description?.toLowerCase().includes('ransomware'))) ||
      (selectedCategory === 'phishing' && (article.title.toLowerCase().includes('phishing') || 
        article.description?.toLowerCase().includes('phishing'))) ||
      (selectedCategory === 'malware' && (article.title.toLowerCase().includes('malware') || 
        article.description?.toLowerCase().includes('malware'))) ||
      (selectedCategory === 'breach' && (article.title.toLowerCase().includes('breach') || 
        article.description?.toLowerCase().includes('breach'))) ||
      (selectedCategory === 'threats' && (article.title.toLowerCase().includes('threat') || 
        article.description?.toLowerCase().includes('threat')));
    
    return matchesSearch && matchesSource && matchesCategory;
  });

  const sources = [...new Set(news.map(article => article.source.name))];

  const handleImageError = (index) => {
    setImageErrors(prev => ({
      ...prev,
      [index]: true
    }));
  };

  const getFallbackImage = (article) => {
    // Try to get a relevant cybersecurity image based on the article content
    const title = article.title.toLowerCase();
    if (title.includes('ransomware')) return 'https://source.unsplash.com/400x200/?ransomware,cybersecurity';
    if (title.includes('phishing')) return 'https://source.unsplash.com/400x200/?phishing,security';
    if (title.includes('malware')) return 'https://source.unsplash.com/400x200/?malware,cybersecurity';
    if (title.includes('hack')) return 'https://source.unsplash.com/400x200/?hacking,cybersecurity';
    return 'https://source.unsplash.com/400x200/?cybersecurity,security';
  };

  const categories = [
    { id: 'all', name: 'All News' },
    { id: 'ransomware', name: 'Ransomware' },
    { id: 'phishing', name: 'Phishing' },
    { id: 'malware', name: 'Malware' },
    { id: 'breach', name: 'Data Breaches' },
    { id: 'threats', name: 'Cyber Threats' }
  ];

  const toggleBookmark = (article) => {
    setBookmarkedArticles(prev => {
      const isBookmarked = prev.some(a => a.url === article.url);
      if (isBookmarked) {
        return prev.filter(a => a.url !== article.url);
      } else {
        return [...prev, article];
      }
    });
  };

  const handleShare = (article) => {
    setSelectedArticle(article);
    setShowShareModal(true);
  };

  const shareArticle = async (platform) => {
    if (!selectedArticle) return;
    
    const url = encodeURIComponent(selectedArticle.url);
    const title = encodeURIComponent(selectedArticle.title);
    
    let shareUrl = '';
    switch (platform) {
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?url=${url}&text=${title}`;
        break;
      case 'linkedin':
        shareUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${url}&title=${title}`;
        break;
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
        break;
      default:
        return;
    }
    
    window.open(shareUrl, '_blank', 'width=600,height=400');
    setShowShareModal(false);
  };

  if (loading) {
    return (
      <div className="news-container">
        <div className="loading-spinner">
          <FaSpinner className="spinner" />
          <p>Loading latest cybersecurity news...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="news-container">
        <div className="error-message">
          <p>{error}</p>
          <button onClick={fetchNews}>Try Again</button>
        </div>
      </div>
    );
  }

  return (
    <div className="news-container">
      <div className="news-hero">
        <h1>
          <FaShieldAlt className="hero-icon" />
          Latest Cybersecurity News
        </h1>
        <p>Stay informed with the most recent developments in cybersecurity and digital threats</p>
      </div>

      <div className="news-controls">
        <div className="search-box">
          <FaSearch className="search-icon" />
          <input
            type="text"
            placeholder="Search cybersecurity news..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="filter-box">
          <FaFilter className="filter-icon" />
          <select
            value={selectedSource}
            onChange={(e) => setSelectedSource(e.target.value)}
          >
            <option value="all">All Sources</option>
            {sources.map(source => (
              <option key={source} value={source.toLowerCase()}>
                {source}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="category-tabs">
        {categories.map(category => (
          <button
            key={category.id}
            className={`category-tab ${selectedCategory === category.id ? 'active' : ''}`}
            onClick={() => setSelectedCategory(category.id)}
          >
            {category.name}
          </button>
        ))}
      </div>

      <div className="news-grid">
        {filteredNews.map((article, index) => (
          <article key={index} className="news-card">
            <div className="news-image">
              {imageErrors[index] ? (
                <div className="image-fallback">
                  <FaImage className="fallback-icon" />
                  <span>Cybersecurity News</span>
                </div>
              ) : (
                <img 
                  src={article.urlToImage || getFallbackImage(article)}
                  alt={article.title}
                  onError={() => handleImageError(index)}
                />
              )}
              <div className="image-overlay"></div>
              <div className="article-actions">
                <button 
                  className="action-btn bookmark-btn"
                  onClick={() => toggleBookmark(article)}
                  title="Bookmark Article"
                >
                  {bookmarkedArticles.some(a => a.url === article.url) ? 
                    <FaBookmark /> : <FaRegBookmark />}
                </button>
                <button 
                  className="action-btn share-btn"
                  onClick={() => handleShare(article)}
                  title="Share Article"
                >
                  <FaShare />
                </button>
              </div>
            </div>
            <div className="news-content">
              <div className="news-meta">
                <span className="source">
                  <FaNewspaper /> {article.source.name}
                </span>
                <span className="date">
                  <FaClock /> {new Date(article.publishedAt).toLocaleDateString()}
                </span>
              </div>
              <h2>{article.title}</h2>
              <p>{article.description}</p>
              <div className="news-footer">
                <a 
                  href={article.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="read-more"
                >
                  Read Full Article
                  <FaGlobe />
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>

      {showShareModal && (
        <div className="share-modal">
          <div className="share-modal-content">
            <h3>Share Article</h3>
            <div className="share-buttons">
              <button onClick={() => shareArticle('twitter')} className="share-btn twitter">
                Share on Twitter
              </button>
              <button onClick={() => shareArticle('linkedin')} className="share-btn linkedin">
                Share on LinkedIn
              </button>
              <button onClick={() => shareArticle('facebook')} className="share-btn facebook">
                Share on Facebook
              </button>
            </div>
            <button className="close-modal" onClick={() => setShowShareModal(false)}>
              Close
            </button>
          </div>
        </div>
      )}

      {filteredNews.length === 0 && (
        <div className="no-results">
          <FaExclamationTriangle className="no-results-icon" />
          <p>No cybersecurity news articles found matching your criteria.</p>
        </div>
      )}
    </div>
  );
};

export default News; 